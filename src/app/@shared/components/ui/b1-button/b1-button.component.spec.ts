import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ButtonComponent } from './b1-button.component';

describe('B1ButtonComponent', () => {
  let component: B1ButtonComponent;
  let fixture: ComponentFixture<B1ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
