import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionWindowComponent } from './version-window.component';

describe('VersionWindowComponent', () => {
  let component: VersionWindowComponent;
  let fixture: ComponentFixture<VersionWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionWindowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
