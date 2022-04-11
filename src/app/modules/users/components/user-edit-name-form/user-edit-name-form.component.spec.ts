import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditNameFormComponent } from './user-edit-name-form.component';

describe('UserEditNameFormComponent', () => {
  let component: UserEditNameFormComponent;
  let fixture: ComponentFixture<UserEditNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditNameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
