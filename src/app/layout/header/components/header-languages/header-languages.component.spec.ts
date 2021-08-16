import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLanguagesComponent } from './header-languages.component';

describe('HeaderLanguagesComponent', () => {
  let component: HeaderLanguagesComponent;
  let fixture: ComponentFixture<HeaderLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
