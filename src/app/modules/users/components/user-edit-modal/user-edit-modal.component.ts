import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { BaseFormComponent } from '@forms/base-form.component';
import { UsersSelectors } from '@store/users/selectors';
import { UsersActions } from '@store/users/actions';
import { TranslateService } from '@ngx-translate/core';
import { ModelControl } from '@b1-types/model-controls.type';
import { UserAuthForm } from '@modules/users/models/user-auth-form.model';
import { email } from '@validators/email.validator';
import { Role } from '@modules/users/models/role.model';

const { required } = Validators;

interface RolesData {
  name: string;
  label: string;
  // value: boolean;
}

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent
  extends BaseFormComponent
  implements OnInit
{
  form!: FormGroup;
  // FOR DEMO PURPOSE ONLY:
  isLoading$: Observable<boolean> = of(false);
  errorMessage = '';
  phoneControl = new FormControl('', [required]);
  emailControl = new FormControl('', [required, email]);
  roleControlsArray = new FormArray([]);
  rolesData!: RolesData[];

  constructor(
    store: Store,
    changeDetectorRef: ChangeDetectorRef,
    private translateService: TranslateService
  ) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    this.store
      .select(UsersSelectors.rolesSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((roles: Role[]) => {
        this.rolesData = roles.map((role: Role) => ({
          name: role.roleString,
          label: this.createRoleControlLabel(role),
        }));
        this.rolesData.forEach(() => {
          this.roleControlsArray.push(new FormControl(false));
        });
        this.initForm();
      });
  }

  onSubmit(): void {
    const roles: string[] = this.form.value.roles
      .map((checked: boolean, i: number) => checked && this.rolesData[i].name)
      .filter((name: string) => !!name);
    const { phoneNumber, email } = this.form.value as UserAuthForm;
    const user = { phoneNumber, email, roles };
    console.log('user: ', user);
    // FOR DEMO PURPOSE ONLY:
    this.submit(UsersActions.createUser({ user }));
  }

  createRoleControlLabel(role: Role): string {
    return (
      this.translateService.instant(
        `components.admin.roles.${role.roleString}`
      ) +
      ` (${role.menus
        .map((menu: string) =>
          this.translateService.instant(`components.profile.menu.navs.${menu}`)
        )
        .join(', ')})`
    );
  }

  get roleControlLabels(): string[] {
    return this.rolesData.map(({ label }) => label);
  }

  private initForm(): void {
    const controls: ModelControl<UserAuthForm> = {
      phoneNumber: this.phoneControl,
      email: this.emailControl,
      roles: this.roleControlsArray,
    };
    this.form = new FormGroup(controls);
  }
}
