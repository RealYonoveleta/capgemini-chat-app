import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from '../../../../environments/environment.development';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  
  private firebaseApp: FirebaseApp;

  private _auth?: Auth;
  private _firestore?: Firestore;

  constructor() {
    this.firebaseApp = initializeApp(environment.firebaseConfig);
  }

  get auth() {
    if(!this._auth) this._auth = getAuth(this.firebaseApp);
    return this._auth;
  }

  get firestore() {
    if(!this._firestore) this._firestore = getFirestore(this.firebaseApp);
    return this._firestore;
  }

}
