import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable, of } from 'rxjs';
import {GoogleAuthProvider} from 'firebase/auth';
import { User } from 'src/app/models/user';
import { UserProfile } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<firebase.default.User|null>;

constructor(private auth:AngularFireAuth) {
  this.user=auth.authState;
 }

 SignInWithGoogle(){
  return this.auth.signInWithPopup(new GoogleAuthProvider());
 }
  registerWithEmailandPassword(email:string, password:string):Promise<firebase.default.auth.UserCredential>{
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  signWithEmailandPassword(email:string, password:string):Promise<firebase.default.auth.UserCredential>{
    return this.auth.signInWithEmailAndPassword(email,password);
  }
   // Update user's profile
   async updateUserProfile(displayName: string): Promise<void> {
    const user = await this.auth.currentUser;
    if (user) {
      await user.updateProfile({ displayName });
    } else {
      throw new Error('User not logged in');
    }
  }
  logOut():Promise<void>{
    return this.auth.signOut();
  }
  
}