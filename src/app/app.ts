import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
