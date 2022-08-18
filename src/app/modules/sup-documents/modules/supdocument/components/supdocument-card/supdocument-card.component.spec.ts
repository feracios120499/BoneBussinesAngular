import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentCardComponent } from './supdocument-card.component';

describe('SupdocumentCardComponent', () => {
  let component: SupdocumentCardComponent;
  let fixture: ComponentFixture<SupdocumentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
