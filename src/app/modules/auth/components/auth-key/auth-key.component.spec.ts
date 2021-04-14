import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthKeyComponent } from './auth-key.component';

describe('AuthKeyComponent', () => {
  let component: AuthKeyComponent;
  let fixture: ComponentFixture<AuthKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthKeyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
