import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import { DatabaseApiService } from './database-api.service';

import { CommonModule } from '@angular/common';

import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [DatabaseApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
