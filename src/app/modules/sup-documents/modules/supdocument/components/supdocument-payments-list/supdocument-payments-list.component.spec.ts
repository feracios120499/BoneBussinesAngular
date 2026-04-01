import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentPaymentsListComponent } from './supdocument-payments-list.component';

describe('SupdocumentPaymentsListComponent', () => {
  let component: SupdocumentPaymentsListComponent;
  let fixture: ComponentFixture<SupdocumentPaymentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentPaymentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentPaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
