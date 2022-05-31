import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsImportModalComponent } from './payments-import-modal.component';

describe('PaymentsImportModalComponent', () => {
  let component: PaymentsImportModalComponent;
  let fixture: ComponentFixture<PaymentsImportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsImportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
