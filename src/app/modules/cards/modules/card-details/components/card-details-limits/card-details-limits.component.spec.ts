import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsLimitsComponent } from './card-details-limits.component';

describe('CardDetailsLimitsComponent', () => {
  let component: CardDetailsLimitsComponent;
  let fixture: ComponentFixture<CardDetailsLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
