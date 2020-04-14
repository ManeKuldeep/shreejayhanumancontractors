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
