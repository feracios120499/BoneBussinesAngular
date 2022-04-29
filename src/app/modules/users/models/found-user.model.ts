import { User } from './user.model';

export interface FoundUser
  extends Pick<
    User,
    'id' | 'displayName' | 'firstName' | 'lastName' | 'patronymic'
  > {}
