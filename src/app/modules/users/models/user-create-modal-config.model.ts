import { UserCreateModalResult } from './user-create-modal-result.model';

export interface UserCreateModalConfig {
  callback: (data: UserCreateModalResult) => void;
}
