import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLimitModalComponent } from './edit-limit-modal.component';

describe('EditLimitModalComponent', () => {
  let component: EditLimitModalComponent;
  let fixture: ComponentFixture<EditLimitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLimitModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLimitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
