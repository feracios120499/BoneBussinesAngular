import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CardLoaderComponent } from './b1-card-loader.component';

describe('B1CardLoaderComponent', () => {
  let component: B1CardLoaderComponent;
  let fixture: ComponentFixture<B1CardLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CardLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
