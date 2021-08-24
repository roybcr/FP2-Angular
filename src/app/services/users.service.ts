import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersEP } from '../../types/constants';
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get<IExtendedUser[]>(usersEP)
  }
}
