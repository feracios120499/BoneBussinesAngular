import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ContentWrapperComponent } from './b1-content-wrapper.component';

describe('B1ContentWrapperComponent', () => {
  let component: B1ContentWrapperComponent;
  let fixture: ComponentFixture<B1ContentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ContentWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
