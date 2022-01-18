import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SupDocumentsComponent } from './b1-sup-documents.component';

describe('B1SupDocumentsComponent', () => {
  let component: B1SupDocumentsComponent;
  let fixture: ComponentFixture<B1SupDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SupDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SupDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
