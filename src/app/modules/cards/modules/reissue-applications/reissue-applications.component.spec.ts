import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissueApplicationsComponent } from './reissue-applications.component';

describe('ReissueApplicationsComponent', () => {
  let component: ReissueApplicationsComponent;
  let fixture: ComponentFixture<ReissueApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReissueApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReissueApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
