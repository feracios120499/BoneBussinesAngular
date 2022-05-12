import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsItemComponent } from './mobile-apps-item.component';

describe('MobileAppsItemComponent', () => {
  let component: MobileAppsItemComponent;
  let fixture: ComponentFixture<MobileAppsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
