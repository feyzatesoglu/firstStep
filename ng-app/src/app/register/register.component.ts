import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { UserDataService } from '../services/userData.service';

@Component({
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  loading=false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      displayName:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    validators: this.passwordMatchValidator
  }
  register() {
    const{email,password,displayName}=this.registerForm.value;
    this.loading=true;
    this.authenticationService.registerWithEmailandPassword(email,password)
      .then(res => {
        console.log('Registration successful');
        setTimeout(() => {
          this.loading = false; // Set loading state to false when operation completes
        }, 1000);
        this.router.navigate(['/login']);
      })
      .catch(err => console.error('Registration failed:', err));
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (passwordControl?.value === confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors(null);
    } else {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    }
  }
  
}