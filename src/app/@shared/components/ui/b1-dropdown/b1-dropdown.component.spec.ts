import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1DropdownComponent } from './b1-dropdown.component';

describe('B1DropdownComponent', () => {
  let component: B1DropdownComponent;
  let fixture: ComponentFixture<B1DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1DropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
