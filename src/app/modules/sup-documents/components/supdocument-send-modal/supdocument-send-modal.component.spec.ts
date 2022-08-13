import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentSendModalComponent } from './supdocument-send-modal.component';

describe('SupdocumentSendModalComponent', () => {
  let component: SupdocumentSendModalComponent;
  let fixture: ComponentFixture<SupdocumentSendModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentSendModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentSendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
