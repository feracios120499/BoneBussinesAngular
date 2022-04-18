import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondentModalComponent } from './correspondent-modal.component';

describe('CorrespondentModalComponent', () => {
  let component: CorrespondentModalComponent;
  let fixture: ComponentFixture<CorrespondentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
