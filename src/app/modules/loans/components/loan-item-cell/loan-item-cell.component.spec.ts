import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanItemCellComponent } from './loan-item-cell.component';

describe('LoanItemCellComponent', () => {
  let component: LoanItemCellComponent;
  let fixture: ComponentFixture<LoanItemCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanItemCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanItemCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
