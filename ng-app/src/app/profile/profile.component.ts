import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { UserDataService } from '../services/userData.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PhoneAuthProvider } from 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appConfig } from '../app.config';
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { getAuth } from "firebase/auth";
import { CommonModule } from '@angular/common';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user!: firebase.default.User| null;
  profileForm!: FormGroup;

//  profileForm=new FormGroup ({

//   uid:new FormControl(''),
//   displayName:new FormControl(''),
//   firstName:new FormControl(''),
//   lastName:new FormControl(''),
//   phone:new FormControl(''),
//   address:new FormControl(''),
//  })

  constructor(private formBuilder: FormBuilder, private authService:AuthenticationService, private router: Router) { }
ngOnInit(): void {
this.authService.user.subscribe(user=>{
  this.user=user;
  this.initializeForm();
});

}
initializeForm(): void {
  this.profileForm = this.formBuilder.group({
    email: [this.user?.email || '', Validators.required],
    displayName: [this.user?.displayName || '', Validators.required],
    // Add more form controls as needed
  });
}
  
logOut(){
  this.authService.logOut();
  this.router.navigate(['/login']);
}

updateProfile(): void {
  if (this.profileForm.valid) {
    const displayName = this.profileForm.value.displayName;
    // Update other profile fields as needed

    this.authService.updateUserProfile(displayName)
      .then(() => {
        console.log('Profile updated successfully');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  }
}
}
