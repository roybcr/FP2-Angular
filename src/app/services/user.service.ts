import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersEP } from '../../types/constants';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get<IUser>(usersEP + '/' + id);
  }

  updateUser(id: number, user: IUser) {
    return this.http.patch<IUser>(usersEP + '/' + id, user);
  }

  deleteUser(id: number) {
    return this.http.delete<boolean>(usersEP + '/' + id);
  }
}
