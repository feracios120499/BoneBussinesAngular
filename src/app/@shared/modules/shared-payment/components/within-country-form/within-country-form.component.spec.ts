import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithinCountryFormComponent } from './within-country-form.component';

describe('WithinCountryFormComponent', () => {
  let component: WithinCountryFormComponent;
  let fixture: ComponentFixture<WithinCountryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithinCountryFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithinCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
