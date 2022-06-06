import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1FeedbackModalComponent } from './b1-feedback-modal.component';

describe('B1FeedbackModalComponent', () => {
  let component: B1FeedbackModalComponent;
  let fixture: ComponentFixture<B1FeedbackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1FeedbackModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1FeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
