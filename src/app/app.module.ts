import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ComponentsComponent } from './components/components.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyC_Sof7M6hIa0xdct3FAKpA2_f73s9RhNA",
  authDomain: "shreejayhanumancontracto-8e8ea.firebaseapp.com",
  databaseURL: "https://shreejayhanumancontracto-8e8ea.firebaseio.com",
  projectId: "shreejayhanumancontracto-8e8ea",
  storageBucket: "shreejayhanumancontracto-8e8ea.appspot.com",
  messagingSenderId: "545678078609",
  appId: "1:545678078609:web:43a0f2c66f20a1e954c530",
  measurementId: "G-0S48W45BEX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComponentsComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    ProjectsComponent,
    AboutusComponent,
    DetailsComponent,
    ContactusComponent,
    ServiceDetailsComponent,
    FeedbackComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
