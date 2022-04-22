import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatementModalComponent } from './card-statement-modal.component';

describe('CardStatementModalComponent', () => {
  let component: CardStatementModalComponent;
  let fixture: ComponentFixture<CardStatementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStatementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStatementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
