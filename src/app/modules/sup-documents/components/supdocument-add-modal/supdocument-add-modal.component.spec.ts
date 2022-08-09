import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentAddModalComponent } from './supdocument-add-modal.component';

describe('SupdocumentAddModalComponent', () => {
  let component: SupdocumentAddModalComponent;
  let fixture: ComponentFixture<SupdocumentAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
