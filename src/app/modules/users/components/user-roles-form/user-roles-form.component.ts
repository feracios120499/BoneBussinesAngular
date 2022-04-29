import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';
import { listChangeRequired } from '@validators/list-change-required.validator';
import { checklistRequired } from '@validators/checklist-required.validator';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { email } from '@validators/email.validator';
import { UsersSelectors } from '@modules/users/store/selectors';
import { Role } from '@modules/users/models/role.model';
import { ModelControl } from '@b1-types/model-controls.type';

const { required } = Validators;

interface RolesData {
  name: string;
  label: string;
}

interface UserRolesFormValue extends Omit<UserRolesForm, 'roles'> {
  roles: boolean[];
}

@Component({
  selector: 'app-user-roles-form',
  templateUrl: './user-roles-form.component.html',
  styleUrls: ['./user-roles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(UserRolesFormComponent)],
})
export class UserRolesFormComponent extends BaseSubFormComponent implements OnInit {
  formGroup!: FormGroup;
  phoneControl = new FormControl('', [required]);
  emailControl = new FormControl('', [required, email]);
  roleControlsArray = new FormArray([], checklistRequired);

  initialRoleValues: boolean[] = [];
  rolesData!: RolesData[];
  private rolesValidator!: ValidatorFn;

  @ViewChild('formRef') formRef!: NgForm;

  constructor(private store: Store, private translateService: TranslateService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(UsersSelectors.roleList)
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

  get roleLabels(): string[] {
    return this.rolesData.map(({ label }) => label);
  }

  writeValue(value: UserRolesForm): void {
    if (!value) {
      return;
    }
    const roles: boolean[] = this.convertRolesToBoolean(value.roles);
    this.initialRoleValues = roles;
    this.updateRolesValidator();

    const formValue: UserRolesFormValue = {
      phoneNumber: value.phoneNumber,
      email: value.email,
      roles,
    };
    this.formGroup.patchValue(formValue);
    this.phoneControl.disable();
    this.emailControl.disable();
    this.updateTreeValidity(this.formGroup);
  }

  private initForm(): void {
    this.rolesData.forEach(() => this.roleControlsArray.push(new FormControl(false)));
    this.initialRoleValues = [...(this.roleControlsArray.value as boolean[])];
    this.updateRolesValidator();
    const controls: ModelControl<UserRolesForm> = {
      phoneNumber: this.phoneControl,
      email: this.emailControl,
      roles: this.roleControlsArray,
    };
    this.formGroup = new FormGroup(controls);
  }

  protected formChange(formValue$: Observable<UserRolesFormValue>): Observable<UserRolesFormValue> {
    return formValue$.pipe(
      map(() => this.formGroup.getRawValue()),
      distinctUntilObjectChanged(),
      tap((formValue: UserRolesFormValue) => {
        const roles: string[] = this.convertRolesToString(formValue.roles);
        const value: UserRolesForm = {
          phoneNumber: formValue.phoneNumber,
          email: formValue.email,
          roles,
        };
        setTimeout(() => {
          this.onChange(value);
        });
      })
    );
  }

  private updateRolesValidator(): void {
    this.roleControlsArray.removeValidators(this.rolesValidator);
    this.rolesValidator = listChangeRequired(this.initialRoleValues);
    this.roleControlsArray.addValidators(this.rolesValidator);
  }

  private convertRolesToString(roles: boolean[]): string[] {
    return roles
      .map((checked: boolean, i: number) => (checked ? this.rolesData[i].name : ''))
      .filter((name: string) => !!name);
  }

  private convertRolesToBoolean(roles: string[]): boolean[] {
    return this.rolesData.map(({ name }) => roles.includes(name));
  }

  private createRoleControlLabel(role: Role): string {
    return (
      this.translateService.instant(`components.admin.roles.${role.roleString}`) +
      ` (${role.menus
        .map((menu: string) => this.translateService.instant(`components.profile.menu.navs.${menu}`))
        .join(', ')})`
    );
  }
}
