import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentFormComponent } from './supdocument-form.component';

describe('SupdocumentFormComponent', () => {
  let component: SupdocumentFormComponent;
  let fixture: ComponentFixture<SupdocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
