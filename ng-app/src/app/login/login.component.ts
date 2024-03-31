import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isLoggingIn = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    if (this.form.valid) {
      this.loading=true;
      const { email, password } = this.form.value;
      this.authenticationService
        .signWithEmailandPassword(email, password)
        .then((res) => {
          this.router.navigate(['/profile']);
          setTimeout(() => {
            this.loading = false; // Set loading state to false when operation completes
          }, 2000);
        })
        
        .catch((err) => alert(err));
    }
  }
  loginWithGoogle() {
    this.authenticationService.SignInWithGoogle();
    this.router.navigate(['profile']);
  }
}
