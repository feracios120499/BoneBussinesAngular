import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsHeaderComponent } from './contacts-header.component';

describe('ContactsHeaderComponent', () => {
  let component: ContactsHeaderComponent;
  let fixture: ComponentFixture<ContactsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
