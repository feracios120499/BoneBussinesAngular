import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1RequisitesModalComponent } from './b1-requisites-modal.component';

describe('B1RequisitesModalComponent', () => {
  let component: B1RequisitesModalComponent;
  let fixture: ComponentFixture<B1RequisitesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1RequisitesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1RequisitesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
