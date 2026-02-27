import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IonicModule } from '@ionic/angular';
import { ChatService } from '../../services/chat.service';
import { ChatWidgetComponent } from '../chat-widget/chat-widget.component';
import { ChatListActionsComponent } from '../chat-list-actions/chat-list-actions.component';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  imports: [IonicModule, ChatWidgetComponent, ChatListActionsComponent],
})
export class ChatListComponent {
  private chatService = inject(ChatService);

  chats = toSignal(this.chatService.getChats());
}
