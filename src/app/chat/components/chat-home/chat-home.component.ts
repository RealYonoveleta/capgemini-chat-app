import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/components/header/header.component";

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss'],
  imports: [HeaderComponent],
})
export class ChatHomeComponent {}
