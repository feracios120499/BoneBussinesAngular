import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CellContainerComponent } from './b1-cell-container.component';

describe('B1CellContainerComponent', () => {
  let component: B1CellContainerComponent;
  let fixture: ComponentFixture<B1CellContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CellContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
