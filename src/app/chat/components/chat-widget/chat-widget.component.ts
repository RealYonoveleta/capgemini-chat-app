import { Component, computed, inject, input } from '@angular/core';
import { Chat } from '../../../model/chat';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss'],
  host: {
    '(click)': 'onSelect()',
  },
})
export class ChatWidgetComponent {
  private chatService = inject(ChatService);

  chat = input<Chat>();

  title = computed(() => this.chat()?.title);

  onSelect() {
    this.chatService.setActiveChat(this.chat()!);
  }
}
