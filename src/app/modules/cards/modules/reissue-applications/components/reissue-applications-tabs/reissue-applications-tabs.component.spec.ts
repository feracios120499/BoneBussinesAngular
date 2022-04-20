import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissueApplicationsTabsComponent } from './reissue-applications-tabs.component';

describe('ReissueApplicationsTabsComponent', () => {
  let component: ReissueApplicationsTabsComponent;
  let fixture: ComponentFixture<ReissueApplicationsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReissueApplicationsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReissueApplicationsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
