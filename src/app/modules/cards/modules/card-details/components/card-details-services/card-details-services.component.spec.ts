import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsServicesComponent } from './card-details-services.component';

describe('CardDetailsServicesComponent', () => {
  let component: CardDetailsServicesComponent;
  let fixture: ComponentFixture<CardDetailsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
