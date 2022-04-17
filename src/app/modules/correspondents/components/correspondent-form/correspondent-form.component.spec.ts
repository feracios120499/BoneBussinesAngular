import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondentFormComponent } from './correspondent-form.component';

describe('CorrespondentFormComponent', () => {
  let component: CorrespondentFormComponent;
  let fixture: ComponentFixture<CorrespondentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
