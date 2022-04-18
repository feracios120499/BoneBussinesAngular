import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondentsHeaderComponent } from './correspondents-header.component';

describe('CorrespondentsHeaderComponent', () => {
  let component: CorrespondentsHeaderComponent;
  let fixture: ComponentFixture<CorrespondentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondentsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
