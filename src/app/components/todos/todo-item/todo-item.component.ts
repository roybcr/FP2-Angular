import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from '../../../services/todos.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  sub: Subscription = new Subscription();
  @Input('title') title: string = '';
  @Input('completed') completed: boolean = false;
  @Input('id') id: number = -1;
  @Output() updateUserBorder: EventEmitter<void> = new EventEmitter<void>();
  constructor(private todosService: TodosService) {}

  onUpdateTodo() {
    if (this.id !== -1) {
      this.todosService
        .updateTodo(this.id, { completed: !this.completed })
        .subscribe((data) => {
          this.completed = data.completed;
          this.updateUserBorder.emit();
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
