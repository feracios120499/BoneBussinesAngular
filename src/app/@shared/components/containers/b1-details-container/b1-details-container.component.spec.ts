import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1DetailsContainerComponent } from './b1-details-container.component';

describe('B1DetailsContainerComponent', () => {
  let component: B1DetailsContainerComponent;
  let fixture: ComponentFixture<B1DetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1DetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1DetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
