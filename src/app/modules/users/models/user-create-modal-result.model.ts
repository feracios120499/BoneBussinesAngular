import { UserEditModalResult } from './user-edit-modal-result.model';
import { UserRolesForm } from './user-roles-form.model';
import { UserNameForm } from './user-name-form.model';

export type UserCreateModalResult = UserEditModalResult | (UserRolesForm & UserNameForm);
