import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountRowComponent } from './card-account-row.component';

describe('CardAccountRowComponent', () => {
  let component: CardAccountRowComponent;
  let fixture: ComponentFixture<CardAccountRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAccountRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
