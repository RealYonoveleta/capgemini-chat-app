import { inject, Injectable } from '@angular/core';
import { FirestoreService } from '../../core/firebase/services/firestore.service';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from '../../model/user';
import { AuthService } from '../../core/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestoreService = inject(FirestoreService);
  private firestore = this.firestoreService.firestore;

  private collection: string = 'users';

  private userDoc(uid: string) {
    return doc(this.firestore, this.collection, uid);
  }

  createUser(uid: string, user: User) {
    return setDoc(this.userDoc(uid), user);
  }

  getUser(uid: string) {
    return getDoc(this.userDoc(uid));
  }
}
