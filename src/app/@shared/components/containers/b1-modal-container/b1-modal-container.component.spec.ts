import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ModalContainerComponent } from './b1-modal-container.component';

describe('B1ModalContainerComponent', () => {
  let component: B1ModalContainerComponent;
  let fixture: ComponentFixture<B1ModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ModalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
