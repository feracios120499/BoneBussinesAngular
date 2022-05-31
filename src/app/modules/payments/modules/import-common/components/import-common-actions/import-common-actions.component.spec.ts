import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommonActionsComponent } from './import-common-actions.component';

describe('ImportCommonActionsComponent', () => {
  let component: ImportCommonActionsComponent;
  let fixture: ComponentFixture<ImportCommonActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommonActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCommonActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
