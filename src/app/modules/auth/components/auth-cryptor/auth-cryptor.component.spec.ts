import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCryptorComponent } from './auth-cryptor.component';

describe('AuthCryptorComponent', () => {
  let component: AuthCryptorComponent;
  let fixture: ComponentFixture<AuthCryptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCryptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCryptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
