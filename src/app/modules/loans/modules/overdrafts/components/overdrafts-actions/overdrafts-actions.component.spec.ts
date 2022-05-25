import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftsActionsComponent } from './overdrafts-actions.component';

describe('OverdraftsActionsComponent', () => {
  let component: OverdraftsActionsComponent;
  let fixture: ComponentFixture<OverdraftsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdraftsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
