import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { UserDataService } from '../services/userData.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PhoneAuthProvider } from 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appConfig } from '../app.config';
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
 
  userInfo:any;
 profileForm=new FormGroup ({
  uid:new FormControl(''),
  displayName:new FormControl(''),
  firstName:new FormControl(''),
  lastName:new FormControl(''),
  phone:new FormControl(''),
  address:new FormControl(''),
 })

  constructor(private formBuilder: FormBuilder, private authService:AuthenticationService, private router: Router) { }
ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo(); // AuthService'ten gelen veriyi al
  }
    
logOut(){
  this.authService.logOut();
  this.router.navigate(['/login']);
}
submit(){// Add a second document with a generated ID.

}
}
