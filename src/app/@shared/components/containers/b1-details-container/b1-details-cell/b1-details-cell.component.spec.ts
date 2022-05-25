import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1DetailsCellComponent } from './b1-details-cell.component';

describe('B1DetailsCellComponent', () => {
  let component: B1DetailsCellComponent;
  let fixture: ComponentFixture<B1DetailsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B1DetailsCellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1DetailsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
