// src/app/app.ts
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: '../styles.css'
})
export class App implements OnInit {
  protected readonly title = signal('http-client-demo');

  // Main Activity Data
  httpusers = signal<User[]>([]);

  // CHALLENGE: Filtered Data (Limit to 5)
  challengePosts = signal<any[]>([]);

  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    // Main Activity fetch
    this.httpclient.getUsersRemotely().subscribe((data) => {
      this.httpusers.set(data);
    });

    // CHALLENGE Activity fetch + filter (limit to 5)
    this.httpclient.getPostsRemotely().subscribe((data) => {
      this.challengePosts.set(data.slice(0, 5));
    });
  }
}
