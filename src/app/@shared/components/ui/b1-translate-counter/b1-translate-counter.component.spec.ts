import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1TranslateCounterComponent } from './b1-translate-counter.component';

describe('B1TranslateCounterComponent', () => {
  let component: B1TranslateCounterComponent;
  let fixture: ComponentFixture<B1TranslateCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1TranslateCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1TranslateCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
