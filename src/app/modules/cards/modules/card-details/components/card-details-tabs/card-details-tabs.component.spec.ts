import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsTabsComponent } from './card-details-tabs.component';

describe('CardDetailsTabsComponent', () => {
  let component: CardDetailsTabsComponent;
  let fixture: ComponentFixture<CardDetailsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
