import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommonTabsComponent } from './import-common-tabs.component';

describe('ImportCommonTabsComponent', () => {
  let component: ImportCommonTabsComponent;
  let fixture: ComponentFixture<ImportCommonTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommonTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCommonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
