import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CardNumberComponent } from './b1-card-number.component';

describe('B1CardNumberComponent', () => {
  let component: B1CardNumberComponent;
  let fixture: ComponentFixture<B1CardNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CardNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
