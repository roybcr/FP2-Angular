import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postsEP } from 'src/types/constants';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  createPost(createPostDto: CreatePostDto, userId: number) {
    return this.httpClient.post<IPost>(postsEP + '/' + userId, createPostDto);
  }
}
