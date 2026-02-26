import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { AuthService } from '../../../core/auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule, FormErrorComponent, RouterLink, IonicModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly notificationService = inject(NotificationService);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    if (!this.loginForm.valid) return;

    try {
      const { email, password } = this.loginForm.getRawValue();
      await this.authService.signIn(email, password);
      this.notificationService.showSuccess('Logged in successfully');
    } catch (err: any) {
      this.notificationService.showError(err.message);
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.notificationService.showSuccess('Logged in with Google successfully');
    } catch (err: any) {
      this.notificationService.showError(err.message);
    }
  }
}
