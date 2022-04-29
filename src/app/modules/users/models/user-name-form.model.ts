import { User } from './user.model';

export interface UserNameForm extends Pick<User, 'lastName' | 'firstName' | 'patronymic'> {}
