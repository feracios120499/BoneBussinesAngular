import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentHeaderComponent } from './supdocument-header.component';

describe('SupdocumentHeaderComponent', () => {
  let component: SupdocumentHeaderComponent;
  let fixture: ComponentFixture<SupdocumentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
