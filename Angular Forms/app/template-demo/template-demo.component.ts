import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  gender = '';
  status = '';
  position = ''; // Added this property
  comments = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Template Form Submitted!', {
      username: this.username,
      email: this.email,
      password: this.password,
      gender: this.gender,
      status: this.status,
      position: this.position, // Logged new field
      comments: this.comments
    });
  }
}
