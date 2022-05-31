import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1DragDropFilesComponent } from './b1-drag-drop-files.component';

describe('B1DragDropFilesComponent', () => {
  let component: B1DragDropFilesComponent;
  let fixture: ComponentFixture<B1DragDropFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1DragDropFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1DragDropFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
