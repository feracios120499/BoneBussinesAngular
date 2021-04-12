import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCloudComponent } from './auth-cloud.component';

describe('AuthCloudComponent', () => {
  let component: AuthCloudComponent;
  let fixture: ComponentFixture<AuthCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthCloudComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
