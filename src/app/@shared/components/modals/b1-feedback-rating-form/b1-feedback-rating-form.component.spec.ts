import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1FeedbackRatingFormComponent } from './b1-feedback-rating-form.component';

describe('B1FeedbackRatingFormComponent', () => {
  let component: B1FeedbackRatingFormComponent;
  let fixture: ComponentFixture<B1FeedbackRatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B1FeedbackRatingFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1FeedbackRatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
