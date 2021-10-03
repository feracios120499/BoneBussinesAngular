import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1AccountSelectComponent } from './b1-account-select.component';

describe('B1AccountSelectComponent', () => {
  let component: B1AccountSelectComponent;
  let fixture: ComponentFixture<B1AccountSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1AccountSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1AccountSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
