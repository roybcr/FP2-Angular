import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { todosEP } from '../../types/constants';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    return this.httpClient.patch<ITodo>(todosEP + '/' + id, {
      completed: updateTodoDto.completed,
    });
  }

  createTodo(createTodoDto: CreateTodoDto, userId: number) {
    return this.httpClient.post<ITodo>(todosEP + '/' + userId, createTodoDto);
  }
}
