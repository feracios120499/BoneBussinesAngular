import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1PageMenuComponent } from './b1-page-menu.component';

describe('B1PageMenuComponent', () => {
  let component: B1PageMenuComponent;
  let fixture: ComponentFixture<B1PageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1PageMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1PageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
