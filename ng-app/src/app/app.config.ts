
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNwwQ6tgYlrC5qCH_fklwjouA3ORh2Ios",
  authDomain: "firststep-auth.firebaseapp.com",
  projectId: "firststep-auth",
  storageBucket: "firststep-auth.appspot.com",
  messagingSenderId: "25710646588",
  appId: "1:25710646588:web:ba8efb68df754449997a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);