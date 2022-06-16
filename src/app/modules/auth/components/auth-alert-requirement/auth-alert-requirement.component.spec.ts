import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAlertRequirementComponent } from './auth-alert-requirement.component';

describe('AuthAlertRequirementComponent', () => {
  let component: AuthAlertRequirementComponent;
  let fixture: ComponentFixture<AuthAlertRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAlertRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAlertRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
