import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissueApplicationsActionsComponent } from './reissue-applications-actions.component';

describe('ReissueApplicationsActionsComponent', () => {
  let component: ReissueApplicationsActionsComponent;
  let fixture: ComponentFixture<ReissueApplicationsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReissueApplicationsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReissueApplicationsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
