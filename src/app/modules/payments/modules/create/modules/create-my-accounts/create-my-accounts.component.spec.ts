import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMyAccountsComponent } from './create-my-accounts.component';

describe('CreateMyAccountsComponent', () => {
  let component: CreateMyAccountsComponent;
  let fixture: ComponentFixture<CreateMyAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMyAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMyAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
