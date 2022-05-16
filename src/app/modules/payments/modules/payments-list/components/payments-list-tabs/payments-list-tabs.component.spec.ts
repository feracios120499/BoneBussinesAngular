import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsListTabsComponent } from './payments-list-tabs.component';

describe('PaymentsListTabsComponent', () => {
  let component: PaymentsListTabsComponent;
  let fixture: ComponentFixture<PaymentsListTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsListTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsListTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
