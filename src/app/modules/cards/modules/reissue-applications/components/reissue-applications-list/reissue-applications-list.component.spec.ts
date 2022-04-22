import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissueApplicationsListComponent } from './reissue-applications-list.component';

describe('ReissueApplicationsListComponent', () => {
  let component: ReissueApplicationsListComponent;
  let fixture: ComponentFixture<ReissueApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReissueApplicationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReissueApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
