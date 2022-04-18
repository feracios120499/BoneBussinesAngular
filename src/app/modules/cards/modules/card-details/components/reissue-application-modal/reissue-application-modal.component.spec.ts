import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissueApplicationModalComponent } from './reissue-application-modal.component';

describe('ReissueApplicationModalComponent', () => {
  let component: ReissueApplicationModalComponent;
  let fixture: ComponentFixture<ReissueApplicationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReissueApplicationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReissueApplicationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
