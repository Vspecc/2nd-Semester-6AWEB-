import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  title = 'Custom Service Form';
  submitted = false;
  formData: any = null;

  customForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    serviceType: new FormControl('', [Validators.required]),
    priority: new FormControl('Low', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  onSubmit() {
    if (this.customForm.valid) {
      this.submitted = true;
      this.formData = this.customForm.value;
    }
  }
}
