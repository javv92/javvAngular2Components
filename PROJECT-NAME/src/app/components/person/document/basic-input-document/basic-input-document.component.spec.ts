import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputDocumentComponent } from './basic-input-document.component';

describe('BasicInputDocumentComponent', () => {
  let component: BasicInputDocumentComponent;
  let fixture: ComponentFixture<BasicInputDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInputDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
