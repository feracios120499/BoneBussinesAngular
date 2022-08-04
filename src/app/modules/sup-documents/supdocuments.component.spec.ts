import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentsComponent } from './supdocuments.component';

describe('SupdocumentsComponent', () => {
  let component: SupdocumentsComponent;
  let fixture: ComponentFixture<SupdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
