import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1LinkComponent } from './b1-link.component';

describe('B1LinkComponent', () => {
  let component: B1LinkComponent;
  let fixture: ComponentFixture<B1LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1LinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
