import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1InputErrorComponent } from './b1-input-error.component';

describe('B1InputErrorComponent', () => {
  let component: B1InputErrorComponent;
  let fixture: ComponentFixture<B1InputErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1InputErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1InputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
