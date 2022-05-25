import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansHeaderComponent } from './loans-header.component';

describe('LoansHeaderComponent', () => {
  let component: LoansHeaderComponent;
  let fixture: ComponentFixture<LoansHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
