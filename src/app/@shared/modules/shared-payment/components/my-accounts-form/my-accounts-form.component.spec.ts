import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountsFormComponent } from './my-accounts-form.component';

describe('MyAccountsFormComponent', () => {
  let component: MyAccountsFormComponent;
  let fixture: ComponentFixture<MyAccountsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountsFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
