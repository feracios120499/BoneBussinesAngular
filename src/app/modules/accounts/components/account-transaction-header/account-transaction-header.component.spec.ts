import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionHeaderComponent } from './account-transaction-header.component';

describe('AccountTransactionHeaderComponent', () => {
  let component: AccountTransactionHeaderComponent;
  let fixture: ComponentFixture<AccountTransactionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
