import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sub: Subscription = new Subscription();
  selected: number = -1;
  users: IExtendedUser[] = [];
  constructor(private usersService: UsersService) {}

  getAllUsers() {
    this.sub = this.usersService
      .getAllUsers()
      .subscribe((data: IExtendedUser[]) => {
        this.users = data;
      });
  }
  onSelectedUser(index: number) {}
  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
