import { User } from './user.model';

export interface UserSignInModel
  extends Pick<User, 'phoneNumber' | 'email' | 'roles'> {}
