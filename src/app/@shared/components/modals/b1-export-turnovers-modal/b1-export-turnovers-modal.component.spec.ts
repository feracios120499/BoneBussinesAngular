import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ExportTurnoversModalComponent } from './b1-export-turnovers-modal.component';

describe('B1ExportTurnoversModalComponent', () => {
  let component: B1ExportTurnoversModalComponent;
  let fixture: ComponentFixture<B1ExportTurnoversModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B1ExportTurnoversModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ExportTurnoversModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
