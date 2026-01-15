import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  // FIX: Use 'styleUrls' (plural array) for better compatibility
  styleUrls: ['./pipes-demo.css'],
})
export class PipesDemo {
  // 1. Date & Async Data
  presentDate = new Date();
  time$: Observable<Date> = interval(1000).pipe(map(() => new Date()));

  // 2. Financial Data
  price: number = 21639;
  tax: number = 0.85;

  // 3. String & Slice Data
  courseTitle: string = 'advanced angular patterns';
  collection: string[] = ['Ahmad', 'Emma', 'William', 'Liam', 'Olivia', 'Noah'];

  // 4. New Data for Extra Pipes
  completionRate: number = 0.65;

  userConfig = {
    id: 98,
    role: 'instructor',
    theme: 'dark'
  };
}
