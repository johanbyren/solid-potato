import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { CollapseDirective } from 'ngx-bootstrap';

import { GuideComponent } from './guide/guide.component';
import { BonusComponent } from './bonus/bonus.component';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';

import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
        MatIconModule, MatCheckboxModule, MatGridListModule, MatStepperModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CollapseDirective,
    GuideComponent,
    BonusComponent,
    ContactComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
