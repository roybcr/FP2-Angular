import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoFields = this.formBuilder.group({
    title: ['', Validators.required],
  });
  sub: Subscription = new Subscription();
  @Input() userId: number = -1;
  @Output() createTodoEvent: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  constructor(
    private formBuilder: FormBuilder,
    private todosService: TodosService
  ) {}

  createTodo() {
    if (this.userId > 0) {
      this.sub = this.todosService
        .createTodo(
          {
            ...this.todoFields.value,
          },
          this.userId
        )
        .subscribe((data) => {
          this.createTodoEvent.emit(data);
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
