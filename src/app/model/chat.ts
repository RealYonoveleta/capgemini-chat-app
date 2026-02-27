import { Timestamp } from 'firebase/firestore';

export interface Chat {
  id: string;
  title: string;
  participants: string[];
  lastMessage: string;
  updateAt: Timestamp;
}
