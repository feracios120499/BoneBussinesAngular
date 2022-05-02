import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1PageCheckboxComponent } from './b1-page-checkbox.component';

describe('B1PageCheckboxComponent', () => {
  let component: B1PageCheckboxComponent;
  let fixture: ComponentFixture<B1PageCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1PageCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1PageCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
