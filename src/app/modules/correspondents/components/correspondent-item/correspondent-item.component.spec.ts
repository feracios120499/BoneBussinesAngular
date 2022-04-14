import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondentItemComponent } from './correspondent-item.component';

describe('CorrespondentItemComponent', () => {
  let component: CorrespondentItemComponent;
  let fixture: ComponentFixture<CorrespondentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
