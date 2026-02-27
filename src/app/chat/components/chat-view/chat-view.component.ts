import { Component, inject } from '@angular/core';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatService } from '../../services/chat.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
  imports: [ChatHeaderComponent],
})
export class ChatViewComponent {
  private chatService = inject(ChatService);

  chat = toSignal(this.chatService.chat$, { initialValue: null });
}
