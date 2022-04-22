import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CorrespondentsModalComponent } from './b1-correspondents-modal.component';

describe('B1CorrespondentsModalComponent', () => {
  let component: B1CorrespondentsModalComponent;
  let fixture: ComponentFixture<B1CorrespondentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CorrespondentsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CorrespondentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
