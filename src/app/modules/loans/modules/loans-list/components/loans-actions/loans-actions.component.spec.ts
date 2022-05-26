import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansActionsComponent } from './loans-actions.component';

describe('LoansActionsComponent', () => {
  let component: LoansActionsComponent;
  let fixture: ComponentFixture<LoansActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
