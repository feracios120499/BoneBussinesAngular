import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRestorePasswordFormComponent } from './auth-restore-password-form.component';

describe('AuthRestorePasswordFormComponent', () => {
  let component: AuthRestorePasswordFormComponent;
  let fixture: ComponentFixture<AuthRestorePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRestorePasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRestorePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
