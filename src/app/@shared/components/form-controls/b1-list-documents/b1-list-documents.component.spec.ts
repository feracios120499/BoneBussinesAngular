import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ListDocumentsComponent } from './b1-list-documents.component';

describe('B1ListDocumentsComponent', () => {
  let component: B1ListDocumentsComponent;
  let fixture: ComponentFixture<B1ListDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ListDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ListDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
