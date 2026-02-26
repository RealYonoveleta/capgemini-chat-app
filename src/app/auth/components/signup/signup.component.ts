import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { fieldsMatch } from '../../../core/validators/fields-match';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { AuthService } from '../../../core/auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-signup.component',
  imports: [ReactiveFormsModule, FormErrorComponent, RouterLink, IonicModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);

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

  async onSubmit() {
    if (!this.signupForm.valid) return;

    try {
      const { email, name, surname, password } = this.signupForm.getRawValue();
      await this.authService.signUp(email, password, name, surname);
      this.notificationService.showSuccess("Successfully signed up");
      this.router.navigate(['/home']);
    } catch (err: any) {
      this.notificationService.showError(err.message);
    }
  }
}
