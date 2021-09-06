import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTurnoversRowComponent } from './account-turnovers-row.component';

describe('AccountTurnoversRowComponent', () => {
  let component: AccountTurnoversRowComponent;
  let fixture: ComponentFixture<AccountTurnoversRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTurnoversRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTurnoversRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
