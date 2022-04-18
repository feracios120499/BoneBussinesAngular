import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondentsActionsComponent } from './correspondents-actions.component';

describe('CorrespondentsActionsComponent', () => {
  let component: CorrespondentsActionsComponent;
  let fixture: ComponentFixture<CorrespondentsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondentsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondentsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
