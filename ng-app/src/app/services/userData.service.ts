import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { UserProfile } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
constructor(private firestore: Firestore) { }




}
