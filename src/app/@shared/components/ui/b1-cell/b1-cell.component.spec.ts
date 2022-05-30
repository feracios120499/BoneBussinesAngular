import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CellComponent } from './b1-cell.component';

describe('B1CellComponent', () => {
  let component: B1CellComponent;
  let fixture: ComponentFixture<B1CellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
