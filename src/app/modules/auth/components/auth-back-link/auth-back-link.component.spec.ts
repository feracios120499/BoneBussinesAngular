import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBackLinkComponent } from './auth-back-link.component';

describe('AuthBackLinkComponent', () => {
  let component: AuthBackLinkComponent;
  let fixture: ComponentFixture<AuthBackLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBackLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
