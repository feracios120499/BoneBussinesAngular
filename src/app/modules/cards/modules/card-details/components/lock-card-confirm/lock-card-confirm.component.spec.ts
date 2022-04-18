import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockCardConfirmComponent } from './lock-card-confirm.component';

describe('LockCardConfirmComponent', () => {
  let component: LockCardConfirmComponent;
  let fixture: ComponentFixture<LockCardConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockCardConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockCardConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
