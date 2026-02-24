import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { fieldsMatch } from '../../../shared/validators/fields-match';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';

@Component({
  selector: 'app-signup.component',
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  private fb = inject(FormBuilder);

  signupForm = this.fb.nonNullable.group(
    {
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      surname: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: fieldsMatch('password', 'confirmPassword'),
    },
  );

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (!this.signupForm.valid) return;

    console.log(this.signupForm.value);
  }
}
