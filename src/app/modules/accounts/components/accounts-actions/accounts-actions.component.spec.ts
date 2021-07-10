import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsActionsComponent } from './accounts-actions.component';

describe('AccountsActionsComponent', () => {
  let component: AccountsActionsComponent;
  let fixture: ComponentFixture<AccountsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
