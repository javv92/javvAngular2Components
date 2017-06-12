import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';

import { BasicInputDocumentComponent } from './components/person/document/basic-input-document/basic-input-document.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicInputDocumentComponent
  ],
  imports: [
    BrowserModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
