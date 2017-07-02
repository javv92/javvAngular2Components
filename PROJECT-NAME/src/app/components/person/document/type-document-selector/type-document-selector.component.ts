import { Component, OnInit, forwardRef } from '@angular/core';
import { DocumentService } from 'app/service/document.service';
import { DocumentType } from 'app/model/person/document';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-type-document-selector',
  templateUrl: './type-document-selector.component.html',
  styleUrls: ['./type-document-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeDocumentSelectorComponent),
      multi: true,
    }
  ]
})
export class TypeDocumentSelectorComponent implements OnInit, ControlValueAccessor {

  types: DocumentType[];
  isDisabled: boolean;
  // The internal data model
  selectedType: DocumentType;

  constructor(private documentService: DocumentService) { }

  onChangeSelectdDocumetType(value) {
    this.onChangeCallback(value);
  }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentService.getTypes().then(types => {
      this.types = types
    });
  }

  /**callBacks */
  private onChangeCallback(type: DocumentType) { }

  private onTouchedCallback() { }

  // get accessor
  get value(): DocumentType {
    return this.selectedType;
  };

  // set accessor including call the onchange callback
  set value(type: DocumentType) {
    if (type !== this.selectedType) {
      this.selectedType = type;
      this.onChangeCallback(type);
    }
  }
  /**ControlValueAccessor methods */
  writeValue(document: DocumentType): void {
    this.selectedType = document;
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
