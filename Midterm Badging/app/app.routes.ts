import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';       // Import from 'home.ts'
import { AboutComponent } from './pages/about/about';    // Import from 'about.ts'
import { ServicesComponent } from './pages/services/services';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];