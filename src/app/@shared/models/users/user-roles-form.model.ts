import { User } from '@models/users/user.model';

export interface UserRolesForm
  extends Pick<User, 'phoneNumber' | 'email' | 'roles'> {}
