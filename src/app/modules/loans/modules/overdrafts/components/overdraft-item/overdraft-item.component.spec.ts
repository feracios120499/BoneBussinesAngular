import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftItemComponent } from './overdraft-item.component';

describe('OverdraftItemComponent', () => {
  let component: OverdraftItemComponent;
  let fixture: ComponentFixture<OverdraftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdraftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
