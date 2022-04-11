import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  Input,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseFormComponent } from '@forms/base-form.component';
import { UsersSelectors } from '@store/users/selectors';
import { UsersActions } from '@store/users/actions';
import { TranslateService } from '@ngx-translate/core';
import { ModelControl } from '@b1-types/model-controls.type';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { email } from '@validators/email.validator';
import { Role } from '@modules/users/models/role.model';
import { User } from '@models/users/user.model';

const { required } = Validators;

interface RolesData {
  name: string;
  label: string;
}

@Component({
  selector: 'app-user-edit-roles-form',
  templateUrl: './user-edit-roles-form.component.html',
  styleUrls: ['./user-edit-roles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditRolesFormComponent
  extends BaseFormComponent
  implements OnInit
{
  @Input() editingUser?: User;
  initialRoleValues!: boolean[];

  form!: FormGroup;
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingRolesEdit
  );
  errorMessage = '';
  phoneControl = new FormControl('', [required]);
  emailControl = new FormControl('', [required, email]);
  roleControlsArray = new FormArray([]);
  rolesData!: RolesData[];

  constructor(
    store: Store,
    changeDetectorRef: ChangeDetectorRef,
    private translateService: TranslateService,
    private activeModal: NgbActiveModal
  ) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    this.store
      .select(UsersSelectors.rolesSelector)
      .pipe(
        filter((roles: Role[]) => !!roles.length),
        take(1)
      )
      .subscribe((roles: Role[]) => {
        this.rolesData = roles.map((role: Role) => ({
          name: role.roleString,
          label: this.createRoleControlLabel(role),
        }));
        this.initForm();
      });
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

  get isRoleChanged(): boolean {
    return this.initialRoleValues.some(
      (value: boolean, i: number) => value !== this.roleControlsArray.value[i]
    );
  }

  onSubmit(): void {
    const roles: string[] = this.form.value.roles
      .map((checked: boolean, i: number) => checked && this.rolesData[i].name)
      .filter((name: string) => !!name);

    if (this.editingUser) {
      this.submit(
        UsersActions.updateUserRolesRequest({
          userId: this.editingUser.id,
          roles,
        })
      );
      this.activeModal.close();
    } else {
      const { phoneNumber, email } = this.form.value as UserRolesForm;
      this.submit(
        UsersActions.signInUserRequest({ phoneNumber, email, roles })
      );
    }
  }

  private initForm(): void {
    if (this.editingUser) {
      this.phoneControl.setValue(this.editingUser.phoneNumber);
      this.emailControl.setValue(this.editingUser.email);
      this.phoneControl.disable();
      this.emailControl.disable();
    }
    this.rolesData.forEach(({ name }) =>
      this.roleControlsArray.push(
        new FormControl(!!this.editingUser?.roles.includes(name))
      )
    );
    this.initialRoleValues = this.roleControlsArray.value as boolean[];
    const controls: ModelControl<UserRolesForm> = {
      phoneNumber: this.phoneControl,
      email: this.emailControl,
      roles: this.roleControlsArray,
    };
    this.form = new FormGroup(controls);
  }
}
