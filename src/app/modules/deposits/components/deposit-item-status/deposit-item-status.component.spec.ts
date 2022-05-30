import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositItemStatusComponent } from './deposit-item-status.component';

describe('DepositItemStatusComponent', () => {
  let component: DepositItemStatusComponent;
  let fixture: ComponentFixture<DepositItemStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositItemStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
