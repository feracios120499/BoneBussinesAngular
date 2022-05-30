import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsActionsComponent } from './deposits-actions.component';

describe('DepositsActionsComponent', () => {
  let component: DepositsActionsComponent;
  let fixture: ComponentFixture<DepositsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
