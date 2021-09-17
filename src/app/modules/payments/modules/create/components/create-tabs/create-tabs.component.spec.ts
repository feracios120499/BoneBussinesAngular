import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTabsComponent } from './create-tabs.component';

describe('CreateTabsComponent', () => {
  let component: CreateTabsComponent;
  let fixture: ComponentFixture<CreateTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
