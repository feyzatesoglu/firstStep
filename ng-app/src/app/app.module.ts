import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import  {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import firebase from 'firebase/compat/app';
import { FirestoreModule } from '@angular/fire/firestore';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [			
    AppComponent,
      LoginComponent,
      RegisterComponent,
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
