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
import { FirestoreModule } from '@angular/fire/firestore';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
@NgModule({
  declarations: [			
    AppComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireAuthModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FirestoreModule,
    FormsModule
  ],
  providers: [FirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
