import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDarkModeComponent } from './header-dark-mode.component';

describe('HeaderDarkModeComponent', () => {
  let component: HeaderDarkModeComponent;
  let fixture: ComponentFixture<HeaderDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDarkModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
