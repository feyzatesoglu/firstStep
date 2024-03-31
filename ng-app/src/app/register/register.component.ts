import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    //private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router
  ) { }
  username!:string;
  email!: string;
  password!: string;
  ngOnInit() {
  }
  register() {
    this.authenticationService.registerWithEmailandPassword(this.email, this.password)
      .then(res => {
        console.log('Registration successful');
        this.router.navigate(['/login']);
      })
      .catch(err => console.error('Registration failed:', err));
  }
  }
 