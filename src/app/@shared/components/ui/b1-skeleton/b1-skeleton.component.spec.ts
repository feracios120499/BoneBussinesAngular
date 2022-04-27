import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SkeletonComponent } from './b1-skeleton.component';

describe('B1SkeletonComponent', () => {
  let component: B1SkeletonComponent;
  let fixture: ComponentFixture<B1SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
