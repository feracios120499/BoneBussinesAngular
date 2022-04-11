import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditRolesFormComponent } from './user-edit-roles-form.component';

describe('UserEditRolesFormComponent', () => {
  let component: UserEditRolesFormComponent;
  let fixture: ComponentFixture<UserEditRolesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditRolesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditRolesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
