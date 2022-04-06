import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SwitcherComponent } from './b1-switcher.component';

describe('B1SwitcherComponent', () => {
  let component: B1SwitcherComponent;
  let fixture: ComponentFixture<B1SwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
