import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent {
  title = 'Reactive Form Demo';
  submitted = false;
  formData: any = null;

  registrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
    ]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]), // Added field
    comments: new FormControl('')
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submitted = true;
      this.formData = this.registrationForm.value;
      console.log('Reactive Form Submitted!', this.formData);
    }
  }
}
