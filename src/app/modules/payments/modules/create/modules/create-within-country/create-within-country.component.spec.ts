import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWithinCountryComponent } from './create-within-country.component';

describe('CreateWithinCountryComponent', () => {
  let component: CreateWithinCountryComponent;
  let fixture: ComponentFixture<CreateWithinCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWithinCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWithinCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
