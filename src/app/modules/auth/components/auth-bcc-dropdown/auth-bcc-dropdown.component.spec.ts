import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBccDropdownComponent } from './auth-bcc-dropdown.component';

describe('AuthBccDropdownComponent', () => {
  let component: AuthBccDropdownComponent;
  let fixture: ComponentFixture<AuthBccDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBccDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBccDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
