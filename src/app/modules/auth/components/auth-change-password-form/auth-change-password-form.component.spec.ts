import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChangePasswordFormComponent } from './auth-change-password-form.component';

describe('AuthChangePasswordFormComponent', () => {
  let component: AuthChangePasswordFormComponent;
  let fixture: ComponentFixture<AuthChangePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthChangePasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
