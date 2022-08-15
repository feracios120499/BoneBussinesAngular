import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftConfirmComponent } from './swift-confirm.component';

describe('SwiftConfirmComponent', () => {
  let component: SwiftConfirmComponent;
  let fixture: ComponentFixture<SwiftConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
