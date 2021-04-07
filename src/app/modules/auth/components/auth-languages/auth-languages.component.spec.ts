import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLanguagesComponent } from './auth-languages.component';

describe('AuthLanguagesComponent', () => {
  let component: AuthLanguagesComponent;
  let fixture: ComponentFixture<AuthLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
