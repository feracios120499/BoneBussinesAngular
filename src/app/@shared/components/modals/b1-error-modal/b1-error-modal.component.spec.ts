import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ErrorModalComponent } from './b1-error-modal.component';

describe('B1ErrorModalComponent', () => {
  let component: B1ErrorModalComponent;
  let fixture: ComponentFixture<B1ErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ErrorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
