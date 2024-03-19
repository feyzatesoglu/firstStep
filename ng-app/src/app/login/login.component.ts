import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isLoggingIn=false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router
  ) { }
  
  email!: string;
  password!: string;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }
  login(){
this.isLoggingIn=true;
this.authenticationService.signWithEmailandPassword(this.email,this.password).then(res=>{
  console.log('Login successful');
  //direct profile
}).catch(err=>console.error('login failed',err));
}
loginWithGoogle(){
  this.authenticationService.SignInWithGoogle();
}

}
