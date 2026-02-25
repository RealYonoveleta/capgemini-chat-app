import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { AuthService } from '../../../core/services/firebase/auth.service';

@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (!this.loginForm.valid) return;

    const { email, password } = this.loginForm.getRawValue();
    this.authService
      .signIn(email, password)
      .subscribe({ next: (user) => console.log(user), error: (err) => console.log(err.message) });
  }
}
