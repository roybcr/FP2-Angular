import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sub: Subscription = new Subscription();
  users: IExtendedUser[] = [];
  isAddingTodo: boolean = false;
  isCreatingPost: boolean = false;
  isCreatingUser: boolean = false;
  selected: number = -1;
  constructor(
    private usersService: UsersService,
    private userService: UserService
  ) {}

  searchForUsers(query: string) {
    this.sub = this.usersService
      .searchForUsers(query)
      .subscribe((data: IExtendedUser[]) => {
        this.users = data;
      });
  }
  getAllUsers() {
    this.sub = this.usersService
      .getAllUsers()
      .subscribe((data: IExtendedUser[]) => {
        this.users = data;
      });
  }

  /* ----------------------------------------------- Events From Childs ----------------------------------------------- */
  onSelectedUser(index: number) {
    this.selected = index;
  }
  onDeleteUser(index: number) {
    this.users.splice(index, 1);
  }
  onCreateUser() {
    this.getAllUsers();
    this.isCreatingUser = false;
  }
  onCreateTodo(todo: ITodo) {
    if (this.users[this.selected]) {
      this.users[this.selected].todos.push(todo);
      this.isAddingTodo = false;
    }
  }
  onCreatePost(post: IPost) {
    if (this.users[this.selected]) {
      this.users[this.selected].posts.push(post);
      this.isCreatingPost = false;
    }
  }
  /* ----------------------------------------------- Events - End ----------------------------------------------- */

  /* ------------------------------------------------- Show / Hide Components ----------------------------------- */

  toggleUserForm() {
    this.isCreatingUser = !this.isCreatingUser;
  }
  toggleTodoForm() {
    this.isAddingTodo = !this.isAddingTodo;
  }
  togglePostForm() {
    this.isCreatingPost = !this.isCreatingPost;
  }
  /* ------------------------------------------------- Show / Hide Components - END ----------------------------------- */

  /* ------------------------------------------------- Update User's Border --------------------------------- */

  shouldUpdateUserBorder() {
    const currUser = this.users[this.selected];
    if (currUser) {
      this.userService
        .getUser(this.users[this.selected].id)
        .subscribe((data) => {
          const hasUncompleteTodos =
            data.todos.filter((todo) => !todo.completed).length > 0;
          this.users[this.selected] = { ...currUser, hasUncompleteTodos };
        });
    }
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
