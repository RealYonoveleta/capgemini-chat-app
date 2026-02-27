import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ChatService } from '../../services/chat.service';
import { AccountPanelComponent } from '../account-panel/account-panel.component';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss'],
  imports: [
    ChatHeaderComponent,
    ChatListComponent,
    AccountPanelComponent,
    RouterOutlet,
    IonicModule,
  ],
})
export class ChatHomeComponent {
  private chatService = inject(ChatService);

  chat = toSignal(this.chatService.chat$, { initialValue: null });
}
