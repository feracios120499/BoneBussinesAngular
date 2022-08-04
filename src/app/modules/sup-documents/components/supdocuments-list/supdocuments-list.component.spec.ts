import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentsListComponent } from './supdocuments-list.component';

describe('SupdocumentsListComponent', () => {
  let component: SupdocumentsListComponent;
  let fixture: ComponentFixture<SupdocumentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
