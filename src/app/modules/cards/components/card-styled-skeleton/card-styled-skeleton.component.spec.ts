import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyledSkeletonComponent } from './card-styled-skeleton.component';

describe('CardStyledSkeletonComponent', () => {
  let component: CardStyledSkeletonComponent;
  let fixture: ComponentFixture<CardStyledSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStyledSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyledSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
