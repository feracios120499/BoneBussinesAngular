import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1FeedbackContactsFormComponent } from './b1-feedback-contacts-form.component';

describe('B1FeedbackContactsFormComponent', () => {
  let component: B1FeedbackContactsFormComponent;
  let fixture: ComponentFixture<B1FeedbackContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1FeedbackContactsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1FeedbackContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
