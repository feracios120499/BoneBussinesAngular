import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentItemComponent } from './supdocument-item.component';

describe('SupdocumentItemComponent', () => {
  let component: SupdocumentItemComponent;
  let fixture: ComponentFixture<SupdocumentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupdocumentItemComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
