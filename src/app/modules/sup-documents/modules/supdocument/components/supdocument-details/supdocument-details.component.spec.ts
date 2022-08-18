import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentDetailsComponent } from './supdocument-details.component';

describe('SupdocumentDetailsComponent', () => {
  let component: SupdocumentDetailsComponent;
  let fixture: ComponentFixture<SupdocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
