import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1WarningBlockComponent } from './b1-warning-block.component';

describe('B1WarningBlockComponent', () => {
  let component: B1WarningBlockComponent;
  let fixture: ComponentFixture<B1WarningBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1WarningBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1WarningBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
