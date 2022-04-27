import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SwitcherListComponent } from './b1-switcher-list.component';

describe('B1SwitcherListComponent', () => {
  let component: B1SwitcherListComponent;
  let fixture: ComponentFixture<B1SwitcherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SwitcherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SwitcherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
