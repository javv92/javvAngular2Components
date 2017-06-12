import { TestBed, inject } from '@angular/core/testing';

import { DocumentServiceService } from './document-service.service';

describe('DocumentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentServiceService]
    });
  });

  it('should be created', inject([DocumentServiceService], (service: DocumentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
