import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithinCountryConfirmComponent } from './within-country-confirm.component';

describe('ConfirmWithinCountryComponent', () => {
  let component: WithinCountryConfirmComponent;
  let fixture: ComponentFixture<WithinCountryConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithinCountryConfirmComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithinCountryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
