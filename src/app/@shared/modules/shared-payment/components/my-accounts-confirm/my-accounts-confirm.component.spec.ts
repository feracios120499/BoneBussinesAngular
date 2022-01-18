import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountsConfirmComponent } from './my-accounts-confirm.component';

describe('MyAccountsConfirmComponent', () => {
  let component: MyAccountsConfirmComponent;
  let fixture: ComponentFixture<MyAccountsConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountsConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountsConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
