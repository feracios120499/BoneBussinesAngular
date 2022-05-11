import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsHeaderComponent } from './mobile-apps-header.component';

describe('MobileAppsHeaderComponent', () => {
  let component: MobileAppsHeaderComponent;
  let fixture: ComponentFixture<MobileAppsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
