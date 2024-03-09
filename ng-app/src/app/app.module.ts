import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import  {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBNwwQ6tgYlrC5qCH_fklwjouA3ORh2Ios",
      authDomain: "firststep-auth.firebaseapp.com",
      projectId: "firststep-auth",
      storageBucket: "firststep-auth.appspot.com",
      messagingSenderId: "25710646588",
      appId: "1:25710646588:web:ba8efb68df754449997a39"
    }),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
