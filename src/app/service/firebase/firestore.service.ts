import { inject, Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  
  private firebaseService = inject(FirebaseService);

}
