import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1RoundCheckboxComponent } from './b1-round-checkbox.component';

describe('B1RoundCheckboxComponent', () => {
  let component: B1RoundCheckboxComponent;
  let fixture: ComponentFixture<B1RoundCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1RoundCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1RoundCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
