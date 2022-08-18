import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentPaymentsHeaderComponent } from './supdocument-payments-header.component';

describe('SupdocumentPaymentsHeaderComponent', () => {
  let component: SupdocumentPaymentsHeaderComponent;
  let fixture: ComponentFixture<SupdocumentPaymentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentPaymentsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentPaymentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
