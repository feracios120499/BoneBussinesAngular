import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogonComponent } from './auth-logon.component';

describe('AuthLogonComponent', () => {
  let component: AuthLogonComponent;
  let fixture: ComponentFixture<AuthLogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLogonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
