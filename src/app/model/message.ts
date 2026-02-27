import { Timestamp } from 'firebase/firestore';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  createdAt: Timestamp;
}
