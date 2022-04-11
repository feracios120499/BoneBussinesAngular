import { FoundUser } from './found-user.model';

export interface UserNameModel extends Omit<FoundUser, 'id' | 'displayName'> {}
