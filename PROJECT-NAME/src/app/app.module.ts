import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';

import { TypeDocumentSelectorComponent } from 'app/components/person/document/type-document-selector/type-document-selector.component';
import { BasicInputDocumentComponent } from './components/person/document/basic-input-document/basic-input-document.component';
import { AppComponent } from './app.component';

import { DocumentService } from 'app/service/document.service';


@NgModule({
  declarations: [
    AppComponent,
    TypeDocumentSelectorComponent,
    BasicInputDocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdSelectModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
