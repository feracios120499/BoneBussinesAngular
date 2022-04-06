import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1MaskedInputComponent } from './b1-masked-input.component';

describe('B1MaskedInputComponent', () => {
  let component: B1MaskedInputComponent;
  let fixture: ComponentFixture<B1MaskedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1MaskedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1MaskedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
