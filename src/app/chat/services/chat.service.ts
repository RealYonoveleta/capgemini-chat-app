import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Chat } from '../../model/chat';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chat = new BehaviorSubject<Chat | null>(null);
  chat$ = this.chat.asObservable();

  dummyChats = [
    {
      title: 'Project Alpha',
      participants: ['user1', 'user2'],
      createdAt: Timestamp.fromDate(new Date('2026-02-01T10:15:00Z')),
      lastMessage: 'Hey, did you finish the report?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T12:30:00Z')),
    },
    {
      title: 'Weekend Plans',
      participants: ['user3', 'user4'],
      createdAt: Timestamp.fromDate(new Date('2026-01-20T08:45:00Z')),
      lastMessage: "Let's meet at 5pm.",
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T17:00:00Z')),
    },
    {
      title: 'Marketing Team',
      participants: ['user5', 'user6'],
      createdAt: Timestamp.fromDate(new Date('2026-02-10T14:00:00Z')),
      lastMessage: 'New campaign looks great!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T09:30:00Z')),
    },
    {
      title: 'Family Chat',
      participants: ['user7', 'user8', 'user9'],
      createdAt: Timestamp.fromDate(new Date('2026-01-15T18:30:00Z')),
      lastMessage: 'Dinner is at 7 tonight.',
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T18:00:00Z')),
    },
    {
      title: 'Gaming Buddies',
      participants: ['user10', 'user11'],
      createdAt: Timestamp.fromDate(new Date('2026-02-05T20:00:00Z')),
      lastMessage: 'Ready for the raid?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T20:15:00Z')),
    },
    {
      title: 'Book Club',
      participants: ['user12', 'user13'],
      createdAt: Timestamp.fromDate(new Date('2026-01-30T16:00:00Z')),
      lastMessage: 'Next book suggestion?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-24T15:45:00Z')),
    },
    {
      title: 'Travel Plans',
      participants: ['user14', 'user15', 'user16'],
      createdAt: Timestamp.fromDate(new Date('2026-02-12T12:30:00Z')),
      lastMessage: 'Tickets booked for July!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T11:00:00Z')),
    },
    {
      title: 'Dev Chat',
      participants: ['user17', 'user18'],
      createdAt: Timestamp.fromDate(new Date('2026-02-08T09:15:00Z')),
      lastMessage: 'Pushed the latest commit.',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T10:00:00Z')),
    },
    {
      title: 'Fitness Group',
      participants: ['user19', 'user20'],
      createdAt: Timestamp.fromDate(new Date('2026-01-25T07:00:00Z')),
      lastMessage: 'Morning run tomorrow?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T06:45:00Z')),
    },
    {
      title: 'Music Lovers',
      participants: ['user21', 'user22', 'user23'],
      createdAt: Timestamp.fromDate(new Date('2026-02-02T19:00:00Z')),
      lastMessage: 'Check out this new album!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T19:30:00Z')),
    },
    {
      title: 'Study Group',
      participants: ['user24', 'user25'],
      createdAt: Timestamp.fromDate(new Date('2026-01-28T13:00:00Z')),
      lastMessage: 'Exam is next week.',
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T14:00:00Z')),
    },
    {
      title: 'Startup Ideas',
      participants: ['user26', 'user27'],
      createdAt: Timestamp.fromDate(new Date('2026-02-11T15:30:00Z')),
      lastMessage: "Let's brainstorm tomorrow.",
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T16:00:00Z')),
    },
    {
      title: 'Cooking Club',
      participants: ['user28', 'user29'],
      createdAt: Timestamp.fromDate(new Date('2026-01-18T17:00:00Z')),
      lastMessage: 'Recipe looks amazing!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-24T18:30:00Z')),
    },
    {
      title: 'Photography',
      participants: ['user30', 'user31', 'user32'],
      createdAt: Timestamp.fromDate(new Date('2026-02-03T10:00:00Z')),
      lastMessage: 'Check out my latest shots.',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T12:00:00Z')),
    },
    {
      title: 'Sports Chat',
      participants: ['user33', 'user34'],
      createdAt: Timestamp.fromDate(new Date('2026-01-22T21:00:00Z')),
      lastMessage: 'Game tonight is intense!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T21:30:00Z')),
    },
    {
      title: 'Random Talks',
      participants: ['user35', 'user36', 'user37'],
      createdAt: Timestamp.fromDate(new Date('2026-02-09T11:30:00Z')),
      lastMessage: 'Did you see that news?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T11:45:00Z')),
    },
    {
      title: 'Movie Night',
      participants: ['user38', 'user39'],
      createdAt: Timestamp.fromDate(new Date('2026-01-26T20:00:00Z')),
      lastMessage: 'Which movie should we watch?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T20:15:00Z')),
    },
    {
      title: 'Tech Talk',
      participants: ['user40', 'user41'],
      createdAt: Timestamp.fromDate(new Date('2026-02-06T09:00:00Z')),
      lastMessage: 'New framework looks cool!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T09:30:00Z')),
    },
    {
      title: 'Language Exchange',
      participants: ['user42', 'user43'],
      createdAt: Timestamp.fromDate(new Date('2026-01-29T14:00:00Z')),
      lastMessage: 'Practice session tomorrow?',
      updatedAt: Timestamp.fromDate(new Date('2026-02-25T15:00:00Z')),
    },
    {
      title: 'Gaming Squad',
      participants: ['user44', 'user45', 'user46'],
      createdAt: Timestamp.fromDate(new Date('2026-02-07T18:30:00Z')),
      lastMessage: 'Let’s squad up tonight!',
      updatedAt: Timestamp.fromDate(new Date('2026-02-26T19:00:00Z')),
    },
  ];

  setActiveChat(chat: Chat) {
    this.chat.next(chat);
  }

  getChats(): Observable<Chat[]> {
    return of(this.dummyChats);
  }
}
