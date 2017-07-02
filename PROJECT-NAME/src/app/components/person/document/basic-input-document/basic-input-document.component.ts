import { Component, OnInit, forwardRef } from '@angular/core';
import { DocumentConstants } from 'app/config/constants';
import { Document } from 'app/model/person/document';
import { TypeDocumentSelectorComponent } from 'app/components/person/document/type-document-selector/type-document-selector.component';
import { DocumentService } from 'app/service/document.service';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-basic-input-document',
  templateUrl: './basic-input-document.component.html',
  styleUrls: ['./basic-input-document.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInputDocumentComponent),
      multi: true,
    }
  ]
})
export class BasicInputDocumentComponent implements OnInit, ControlValueAccessor {

  palceholder = 'Nro. de documento';
  isDisabled = false;
  document: Document;

  constructor(private documentService: DocumentService) {

  }

  ngOnInit() {
    this.document = new Document();
  }

  onChangeDocumentType(value) {
    this.document.documentNumber = '';
    this.onChangeCallback(this.document);
  }

  onChangeDocumentNumber(value) {
    this.onChangeCallback(this.document);
  }

  /**callBacks */
  private onChangeCallback(document: Document) { }

  private onTouchedCallback() { }

  // get accessor
  get value(): Document {
    return this.document;
  };

  // set accessor including call the onchange callback
  set value(document: Document) {
    if (document !== this.document) {
      this.document = document;
      this.onChangeCallback(document);
    }
  }

  /**ControlValueAccessor methods */
  writeValue(document: Document): void {
    this.document = document;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
