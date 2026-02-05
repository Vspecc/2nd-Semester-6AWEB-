import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../../services/data'; 
import { Observable } from 'rxjs';
// 1. Import the pipe
import { TruncatePipe } from '../../pipes/truncate-pipe'; 

@Component({
  selector: 'app-home',
  standalone: true,
  // 2. Add TruncatePipe to the imports array
  imports: [CommonModule, TruncatePipe], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.posts$ = this.dataService.getPosts();
  }
}