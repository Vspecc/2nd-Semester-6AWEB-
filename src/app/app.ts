import { Component, signal } from '@angular/core';
// Re-adding RouterLinkActive since we are now using it in app.html
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  // Re-adding RouterLinkActive to imports array
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-routing-lab');
}
