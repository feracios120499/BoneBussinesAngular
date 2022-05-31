import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsExportModalComponent } from './payments-export-modal.component';

describe('PaymentsExportModalComponent', () => {
  let component: PaymentsExportModalComponent;
  let fixture: ComponentFixture<PaymentsExportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsExportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsExportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
