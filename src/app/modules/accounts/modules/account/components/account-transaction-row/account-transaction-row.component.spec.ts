import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionRowComponent } from './account-transaction-row.component';

describe('AccountTransactionRowComponent', () => {
  let component: AccountTransactionRowComponent;
  let fixture: ComponentFixture<AccountTransactionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
