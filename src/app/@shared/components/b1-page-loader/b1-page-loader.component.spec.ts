import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1PageLoaderComponent } from './b1-page-loader.component';

describe('B1PageLoaderComponent', () => {
  let component: B1PageLoaderComponent;
  let fixture: ComponentFixture<B1PageLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1PageLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1PageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
