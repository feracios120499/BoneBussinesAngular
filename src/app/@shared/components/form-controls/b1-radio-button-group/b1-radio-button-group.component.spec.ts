import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1RadioButtonGroupComponent } from './b1-radio-button-group.component';

describe('B1RadioButtonGroupComponent', () => {
  let component: B1RadioButtonGroupComponent;
  let fixture: ComponentFixture<B1RadioButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1RadioButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1RadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
