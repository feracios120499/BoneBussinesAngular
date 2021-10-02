import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmWithinCountryComponent } from './confirm-within-country.component';

describe('ConfirmWithinCountryComponent', () => {
  let component: ConfirmWithinCountryComponent;
  let fixture: ComponentFixture<ConfirmWithinCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmWithinCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmWithinCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
