import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1EmptyComponent } from './b1-empty.component';

describe('B1EmptyComponent', () => {
  let component: B1EmptyComponent;
  let fixture: ComponentFixture<B1EmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1EmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1EmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
