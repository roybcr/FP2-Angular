import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { searchEP, usersEP } from '../../types/constants';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get<IExtendedUser[]>(usersEP);
  }

  searchForUsers(query: string) {
    return this.httpClient.get<IExtendedUser[]>(searchEP + '?query=' + query);
  }

  createUser(createUserDto: CreateUserDto) {
    return this.httpClient.post<IUser>(usersEP, createUserDto);
  }
}
