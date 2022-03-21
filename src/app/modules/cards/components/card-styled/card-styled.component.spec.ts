import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyledComponent } from './card-styled.component';

describe('CardStyledComponent', () => {
  let component: CardStyledComponent;
  let fixture: ComponentFixture<CardStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStyledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
