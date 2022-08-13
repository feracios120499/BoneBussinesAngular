import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentFormSendComponent } from './supdocument-form-send.component';

describe('SupdocumentFormSendComponent', () => {
  let component: SupdocumentFormSendComponent;
  let fixture: ComponentFixture<SupdocumentFormSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentFormSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentFormSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
