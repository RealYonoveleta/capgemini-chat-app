import { computed, inject, Injectable, signal } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential
} from 'firebase/auth';
import { catchError, from, tap, throwError } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseService = inject(FirebaseService);
  private auth = this.firebaseService.auth;

  private _userCrendetial = signal<UserCredential | null>(null);
  userCredential = this._userCrendetial.asReadonly();
  user = computed(() => this.userCredential()?.user);

  signUp(email: string, password: string, name: string, surname: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      tap((userCredential) => this._userCrendetial.set(userCredential)),
      catchError((err) => {
        this._userCrendetial.set(null);
        return throwError(() => err);
      }),
    );
  }

  signIn(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap((user) => this._userCrendetial.set(user)),
      catchError((err) => {
        this._userCrendetial.set(null);
        return throwError(() => err);
      }),
    );
  }
}
