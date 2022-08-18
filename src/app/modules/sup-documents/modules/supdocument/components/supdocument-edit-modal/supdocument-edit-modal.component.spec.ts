import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentEditModalComponent } from './supdocument-edit-modal.component';

describe('SupdocumentEditModalComponent', () => {
  let component: SupdocumentEditModalComponent;
  let fixture: ComponentFixture<SupdocumentEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
