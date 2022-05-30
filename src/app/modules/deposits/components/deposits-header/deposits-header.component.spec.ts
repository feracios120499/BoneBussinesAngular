import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsHeaderComponent } from './deposits-header.component';

describe('DepositsHeaderComponent', () => {
  let component: DepositsHeaderComponent;
  let fixture: ComponentFixture<DepositsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
