import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1ExportTurnoversComponent } from './b1-export-turnovers.component';

describe('B1ExportTurnoversComponent', () => {
  let component: B1ExportTurnoversComponent;
  let fixture: ComponentFixture<B1ExportTurnoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1ExportTurnoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1ExportTurnoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
