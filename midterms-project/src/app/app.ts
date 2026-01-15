import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesDemo } from './pipes-demo/pipes-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesDemo],
  templateUrl: './app.html',
  // FIX: Use 'styleUrls' (plural array)
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mid-project');
}
