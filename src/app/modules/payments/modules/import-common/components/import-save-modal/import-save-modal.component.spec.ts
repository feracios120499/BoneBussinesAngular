import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSaveModalComponent } from './import-save-modal.component';

describe('ImportSaveModalComponent', () => {
  let component: ImportSaveModalComponent;
  let fixture: ComponentFixture<ImportSaveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSaveModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
