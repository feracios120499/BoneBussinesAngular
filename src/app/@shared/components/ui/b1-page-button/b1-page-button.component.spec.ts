import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1PageButtonComponent } from './b1-page-button.component';

describe('B1PageButtonComponent', () => {
  let component: B1PageButtonComponent;
  let fixture: ComponentFixture<B1PageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1PageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1PageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
