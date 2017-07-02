import { Injectable } from '@angular/core';
import { DOCUMENTS } from 'app/mock/mockDocument';
import { DocumentType } from 'app/model/person/document';

@Injectable()
export class DocumentService {
  constructor() { }
  /**
   * getDocument
   */
  public getTypes() {
    return Promise.resolve(DOCUMENTS);
  }

  public documentNumberIsValid(document: DocumentType, documentNumber: string) {
    if (!document || !documentNumber) {
      return false;
    }
    return documentNumber.match(document.pattern);
  }

}
