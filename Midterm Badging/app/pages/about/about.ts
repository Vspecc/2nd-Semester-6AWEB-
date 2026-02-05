import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for DatePipe

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class AboutComponent {
  currentDate = new Date();
}