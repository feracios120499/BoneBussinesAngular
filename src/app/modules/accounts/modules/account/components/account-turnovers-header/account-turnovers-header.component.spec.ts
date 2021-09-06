import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTurnoversHeaderComponent } from './account-turnovers-header.component';

describe('AccountTransactionHeaderComponent', () => {
  let component: AccountTurnoversHeaderComponent;
  let fixture: ComponentFixture<AccountTurnoversHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountTurnoversHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTurnoversHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
