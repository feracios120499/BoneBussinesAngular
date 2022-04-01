import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1InputComponent } from './b1-input.component';

describe('B1InputComponent', () => {
  let component: B1InputComponent;
  let fixture: ComponentFixture<B1InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
