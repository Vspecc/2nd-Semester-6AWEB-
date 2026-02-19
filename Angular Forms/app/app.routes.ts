import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { CustomFormComponent } from './custom-form/custom-form.component'; // Import here

export const routes: Routes = [
  { path: 'template', component: TemplateDemoComponent },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: 'custom', component: CustomFormComponent }, // Add this route
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
