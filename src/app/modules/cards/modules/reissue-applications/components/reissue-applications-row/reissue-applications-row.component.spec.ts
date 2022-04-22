import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissueApplicationsRowComponent } from './reissue-applications-row.component';

describe('ReissueApplicationsRowComponent', () => {
  let component: ReissueApplicationsRowComponent;
  let fixture: ComponentFixture<ReissueApplicationsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReissueApplicationsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReissueApplicationsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
