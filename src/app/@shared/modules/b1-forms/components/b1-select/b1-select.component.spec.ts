import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SelectComponent } from './b1-select.component';

describe('B1SelectComponent', () => {
  let component: B1SelectComponent;
  let fixture: ComponentFixture<B1SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
