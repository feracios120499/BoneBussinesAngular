import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommonComponent } from './import-common.component';

describe('ImportCommonComponent', () => {
  let component: ImportCommonComponent;
  let fixture: ComponentFixture<ImportCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
