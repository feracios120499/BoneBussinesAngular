import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1GlobalLoaderComponent } from './b1-global-loader.component';

describe('B1GlobalLoaderComponent', () => {
  let component: B1GlobalLoaderComponent;
  let fixture: ComponentFixture<B1GlobalLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B1GlobalLoaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1GlobalLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
