import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ImportErrorComponent } from './b1-import-error.component';

describe('B1ImportErrorComponent', () => {
  let component: B1ImportErrorComponent;
  let fixture: ComponentFixture<B1ImportErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ImportErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ImportErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
