import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionSkeletonComponent } from './account-transaction-skeleton.component';

describe('AccountTransactionSkeletonComponent', () => {
  let component: AccountTransactionSkeletonComponent;
  let fixture: ComponentFixture<AccountTransactionSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
