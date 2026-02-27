import { Component, inject } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { AuthService } from '../../../core/auth/services/auth.service';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton],
})
export class HeaderComponent {
  private authService = inject(AuthService);

  async logout() {
    await this.authService.signOut();
  }
}
