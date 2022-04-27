import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SignModalComponent } from './b1-sign-modal.component';

describe('B1SignModalComponent', () => {
  let component: B1SignModalComponent;
  let fixture: ComponentFixture<B1SignModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SignModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
