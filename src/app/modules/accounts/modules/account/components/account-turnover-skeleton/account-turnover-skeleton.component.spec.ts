import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTurnoverSkeletonComponent } from './account-turnover-skeleton.component';

describe('AccountTurnoverSkeletonComponent', () => {
  let component: AccountTurnoverSkeletonComponent;
  let fixture: ComponentFixture<AccountTurnoverSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTurnoverSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTurnoverSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
