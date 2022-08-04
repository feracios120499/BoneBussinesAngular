import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentsActionsComponent } from './supdocuments-actions.component';

describe('SupdocumentsActionsComponent', () => {
  let component: SupdocumentsActionsComponent;
  let fixture: ComponentFixture<SupdocumentsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
