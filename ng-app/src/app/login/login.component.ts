import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { UserDataService } from '../services/userData.service';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule,ToastModule,RouterModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  isLoggingIn = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private messageService:MessageService,
    private primengConfig: PrimeNGConfig,
    private userDataService:UserDataService
  ) {}

  form!: FormGroup;

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.primengConfig.ripple = true;
  }
  login() {
    if (this.form.valid) {
      this.loading=true;
      const { email, password } = this.form.value;
      this.authenticationService
        .signWithEmailandPassword(email, password)
        .then((res) => {
          setTimeout(() => {
            this.loading = false; // Set loading state to false when operation completes
          }, 2000);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Başarıyla giriş yapıldı!' });
          this.router.navigate(['/profile']);
        })
        .catch((err) => alert(err));
    }
  }
  loginWithGoogle() {
    this.authenticationService.SignInWithGoogle();
    this.router.navigate(['profile']);
  }
}
