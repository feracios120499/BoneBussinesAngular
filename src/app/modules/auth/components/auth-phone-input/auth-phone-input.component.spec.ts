import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPhoneInputComponent } from './auth-phone-input.component';

describe('AuthPhoneInputComponent', () => {
  let component: AuthPhoneInputComponent;
  let fixture: ComponentFixture<AuthPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPhoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
