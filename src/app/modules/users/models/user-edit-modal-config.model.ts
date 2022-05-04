import { UserEditModalResult } from './user-edit-modal-result.model';
import { User } from './user.model';

export interface UserEditModalConfig {
  editingUser: User;
  callback: (data: UserEditModalResult) => void;
}
