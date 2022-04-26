import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1PageSeparatorComponent } from './b1-page-separator.component';

describe('B1PageSeparatorComponent', () => {
  let component: B1PageSeparatorComponent;
  let fixture: ComponentFixture<B1PageSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1PageSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1PageSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
