import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1HistoryModalComponent } from './b1-history-modal.component';

describe('B1HistoryModalComponent', () => {
  let component: B1HistoryModalComponent;
  let fixture: ComponentFixture<B1HistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1HistoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1HistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
