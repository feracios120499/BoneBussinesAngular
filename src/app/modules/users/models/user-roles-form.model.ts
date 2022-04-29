import { User } from './user.model';

export interface UserRolesForm extends Pick<User, 'phoneNumber' | 'email' | 'roles'> {}
