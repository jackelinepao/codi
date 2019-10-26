import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { PabellonesComponent } from './components/pabellones/pabellones.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { RealtimeComponent } from './components/firebase/realtime/realtime.component';
import { FirestoreComponent } from './components/firebase/firestore/firestore.component';
import { environment } from './../environments/environment';
import { SlickCarouselModule } from 'ngx-slick-carousel'

//modulos para form reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { RegisterComponent } from './components/login/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorComponent,
    PabellonesComponent,
    FirebaseComponent,
    RealtimeComponent,
    FirestoreComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    SlickCarouselModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
