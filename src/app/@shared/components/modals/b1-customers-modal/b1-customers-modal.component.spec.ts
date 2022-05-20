import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CustomersModalComponent } from './b1-customers-modal.component';

describe('B1CustomersModalComponent', () => {
  let component: B1CustomersModalComponent;
  let fixture: ComponentFixture<B1CustomersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CustomersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CustomersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
