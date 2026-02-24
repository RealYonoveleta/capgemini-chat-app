import { inject, Injectable, signal } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { catchError, from, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseService = inject(FirebaseService);
  private auth = this.firebaseService.auth;

  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  signIn(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map((userCredential) => userCredential.user),
      tap((user) => this._user.set(user)),
      catchError((err) => {
        this._user.set(null);
        return throwError(() => err);
      }),
    );
  }
}
