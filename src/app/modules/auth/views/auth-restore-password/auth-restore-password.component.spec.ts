import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRestorePasswordComponent } from './auth-restore-password.component';

describe('AuthRestorePasswordComponent', () => {
  let component: AuthRestorePasswordComponent;
  let fixture: ComponentFixture<AuthRestorePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRestorePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRestorePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
