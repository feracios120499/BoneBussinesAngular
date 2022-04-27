import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsHeaderComponent } from './instructions-header.component';

describe('InstructionsHeaderComponent', () => {
  let component: InstructionsHeaderComponent;
  let fixture: ComponentFixture<InstructionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
