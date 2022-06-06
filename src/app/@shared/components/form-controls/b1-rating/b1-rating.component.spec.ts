import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1RatingComponent } from './b1-rating.component';

describe('B1RatingComponent', () => {
  let component: B1RatingComponent;
  let fixture: ComponentFixture<B1RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1RatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
