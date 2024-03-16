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

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }
  login(){
this.isLoggingIn=true;
this.authenticationService.logIn({
  email: this.form.value.email,
  password: this.form.value.password
}).subscribe(()=>{
  this.router.navigate(['home']);
})

  }
}
