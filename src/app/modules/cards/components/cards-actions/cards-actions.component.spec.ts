import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsActionsComponent } from './cards-actions.component';

describe('CardsActionsComponent', () => {
  let component: CardsActionsComponent;
  let fixture: ComponentFixture<CardsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
