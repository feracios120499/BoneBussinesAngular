import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftsListComponent } from './overdrafts-list.component';

describe('OverdraftsListComponent', () => {
  let component: OverdraftsListComponent;
  let fixture: ComponentFixture<OverdraftsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdraftsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
