// src/app/httpclient.ts
import { Injectable } from '@angular/core';
import { HttpClient as AngularHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class HttpClient {
  constructor(private http: AngularHttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPostsRemotely(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
