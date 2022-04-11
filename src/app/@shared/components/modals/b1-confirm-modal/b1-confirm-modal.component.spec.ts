import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ConfirmModalComponent } from './b1-confirm-modal.component';

describe('B1ConfirmModalComponent', () => {
  let component: B1ConfirmModalComponent;
  let fixture: ComponentFixture<B1ConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
