import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsListComponent } from './mobile-apps-list.component';

describe('MobileAppsListComponent', () => {
  let component: MobileAppsListComponent;
  let fixture: ComponentFixture<MobileAppsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
