import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPhoneListComponent } from './contacts-phone-list.component';

describe('ContactsPhoneListComponent', () => {
  let component: ContactsPhoneListComponent;
  let fixture: ComponentFixture<ContactsPhoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsPhoneListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsPhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
