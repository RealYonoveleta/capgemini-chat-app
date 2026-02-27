import { Timestamp } from 'firebase/firestore';

export interface Message {
  chatId: string;
  senderId: string;
  content: string;
  createdAt: Timestamp;
}
