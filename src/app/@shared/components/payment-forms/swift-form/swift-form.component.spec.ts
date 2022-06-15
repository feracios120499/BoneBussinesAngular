import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftFormComponent } from './swift-form.component';

describe('SwiftFormComponent', () => {
  let component: SwiftFormComponent;
  let fixture: ComponentFixture<SwiftFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
