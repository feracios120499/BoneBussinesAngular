import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommonListComponent } from './import-common-list.component';

describe('ImportCommonListComponent', () => {
  let component: ImportCommonListComponent;
  let fixture: ComponentFixture<ImportCommonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCommonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
