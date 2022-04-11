import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsInfoComponent } from './card-details-info.component';

describe('CardDetailsInfoComponent', () => {
  let component: CardDetailsInfoComponent;
  let fixture: ComponentFixture<CardDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
