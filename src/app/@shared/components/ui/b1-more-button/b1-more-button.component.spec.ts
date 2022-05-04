import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1MoreButtonComponent } from './b1-more-button.component';

describe('B1MoreButtonComponent', () => {
  let component: B1MoreButtonComponent;
  let fixture: ComponentFixture<B1MoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B1MoreButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1MoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
