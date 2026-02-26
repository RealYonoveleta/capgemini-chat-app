import { Component } from '@angular/core';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { ChatViewComponent } from '../chat-view/chat-view.component';
import { AccountPanelComponent } from "../account-panel/account-panel.component";

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss'],
  imports: [ChatHeaderComponent, ChatListComponent, ChatViewComponent, AccountPanelComponent],
})
export class ChatHomeComponent {}
