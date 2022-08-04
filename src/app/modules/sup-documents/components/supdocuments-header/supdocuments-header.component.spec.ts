import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentsHeaderComponent } from './supdocuments-header.component';

describe('SupdocumentsHeaderComponent', () => {
  let component: SupdocumentsHeaderComponent;
  let fixture: ComponentFixture<SupdocumentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
