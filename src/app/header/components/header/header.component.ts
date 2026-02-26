import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user = inject(AuthService).user;
  displayName = computed(() => this.user()?.displayName);
}
