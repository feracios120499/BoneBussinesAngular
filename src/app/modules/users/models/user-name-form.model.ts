import { User } from '@models/users/user.model';

export interface UserNameForm
  extends Pick<User, 'lastName' | 'firstName' | 'patronymic'> {}
