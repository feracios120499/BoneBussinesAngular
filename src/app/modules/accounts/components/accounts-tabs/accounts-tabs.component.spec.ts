import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTabsComponent } from './accounts-tabs.component';

describe('AccountsTabsComponent', () => {
  let component: AccountsTabsComponent;
  let fixture: ComponentFixture<AccountsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
