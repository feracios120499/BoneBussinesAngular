import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1StatementModalComponent } from './b1-statement-modal.component';

describe('B1StatementModalComponent', () => {
  let component: B1StatementModalComponent;
  let fixture: ComponentFixture<B1StatementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1StatementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1StatementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
