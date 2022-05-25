import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftsComponent } from './overdrafts.component';

describe('OverdraftsComponent', () => {
  let component: OverdraftsComponent;
  let fixture: ComponentFixture<OverdraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
