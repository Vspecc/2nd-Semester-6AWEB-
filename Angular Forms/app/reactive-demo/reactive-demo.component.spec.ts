import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; // Import Reactive modules

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule], // Add ReactiveFormsModule to imports
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent {
  title = 'Reactive Form Demo';
  submitted = false;

  // Define the FormGroup and its controls with validation
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submitted = true;
      console.log('Reactive Form Submitted!', this.registrationForm.value);
    }
  }
}
