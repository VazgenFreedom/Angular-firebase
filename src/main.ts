import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from 'firebase/app';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment.development';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
//import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFirestore,
      BrowserAnimationsModule
    ),
    // provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  ],
});
