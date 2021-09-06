import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTurnoversListComponent } from './account-turnovers-list.component';

describe('AccountTransactionsListComponent', () => {
  let component: AccountTurnoversListComponent;
  let fixture: ComponentFixture<AccountTurnoversListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountTurnoversListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTurnoversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
