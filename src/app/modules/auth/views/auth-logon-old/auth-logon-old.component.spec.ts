import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogonOldComponent } from './auth-logon-old.component';

describe('AuthLogonOldComponent', () => {
  let component: AuthLogonOldComponent;
  let fixture: ComponentFixture<AuthLogonOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLogonOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLogonOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
