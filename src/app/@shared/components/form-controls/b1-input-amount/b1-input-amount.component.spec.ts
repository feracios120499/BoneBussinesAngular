import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1InputAmountComponent } from './b1-input-amount.component';

describe('B1InputAmountComponent', () => {
  let component: B1InputAmountComponent;
  let fixture: ComponentFixture<B1InputAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1InputAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1InputAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
