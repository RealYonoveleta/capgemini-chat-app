import { inject, Injectable, signal } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from 'firebase/auth';
import { FirebaseService } from '../../firebase/services/firebase.service';
import { FIREBASE_AUTH_ERROR_MAP } from '../auth-error.map';
import { UserService } from '../../../user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseService = inject(FirebaseService);
  private auth = this.firebaseService.auth;

  private userService = inject(UserService);

  user = signal<User | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      await user?.reload();
      this.user.set(user);
    });
  }

  async signUp(email: string, password: string, name: string, surname: string) {
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = credential.user;
      await updateProfile(user, {
        displayName: `${name} ${surname}`,
      });

      await this.userService.createUser(user.uid, {email, name, surname});
    } catch (err: any) {
      throw this.customError(err.code);
    }
  }

  async signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (err: any) {
      throw this.customError(err.code);
    }
  }

  async signInWithGoogle() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (err: any) {
      throw this.customError(err.code);
    }
  }

  private customError(firebaseErrorCode: string) {
    const errorMessage =
      FIREBASE_AUTH_ERROR_MAP[firebaseErrorCode] || 'An unexpected error has occurred';

    return new Error(errorMessage);
  }
}
