import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1TextareaComponent } from './b1-textarea.component';

describe('B1TextareaComponent', () => {
  let component: B1TextareaComponent;
  let fixture: ComponentFixture<B1TextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1TextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
