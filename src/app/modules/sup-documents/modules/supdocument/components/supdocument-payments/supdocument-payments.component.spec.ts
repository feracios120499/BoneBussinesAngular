import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentPaymentsComponent } from './supdocument-payments.component';

describe('SupdocumentPaymentsComponent', () => {
  let component: SupdocumentPaymentsComponent;
  let fixture: ComponentFixture<SupdocumentPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
