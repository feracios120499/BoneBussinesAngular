import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentComponent } from './supdocument.component';

describe('SupdocumentComponent', () => {
  let component: SupdocumentComponent;
  let fixture: ComponentFixture<SupdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
