import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingActionsComponent } from './incoming-actions.component';

describe('IncomingActionsComponent', () => {
  let component: IncomingActionsComponent;
  let fixture: ComponentFixture<IncomingActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
