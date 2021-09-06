import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTurnoversComponent } from './account-turnovers.component';

describe('AccountTransactionsComponent', () => {
  let component: AccountTurnoversComponent;
  let fixture: ComponentFixture<AccountTurnoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountTurnoversComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTurnoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
