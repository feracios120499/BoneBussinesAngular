import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1DropdownLinkComponent } from './b1-dropdown-link.component';

describe('B1DropdownLinkComponent', () => {
  let component: B1DropdownLinkComponent;
  let fixture: ComponentFixture<B1DropdownLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1DropdownLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1DropdownLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
