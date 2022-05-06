import { Observable } from 'rxjs';

import { User } from '@modules/users/models/user.model';
import { Role } from '@modules/users/models/role.model';
import { FoundUser } from '@modules/users/models/found-user.model';
import { UserNameForm } from '@modules/users/models/user-name-form.model';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';

export abstract class BaseUsersService {
  abstract getUsers(clientId: string): Observable<User[]>;

  abstract getRoles(clientId: string): Observable<Role[]>;

  abstract findUser(clientId: string, userData: { phoneNumber: string; email: string }): Observable<FoundUser>;

  abstract createUser(clientId: string, userData: UserNameForm & UserRolesForm): Observable<User>;

  abstract restoreUser(clientId: string, userId: string, userData: { roles: string[] }): Observable<User>;

  abstract deleteUser(clientId: string, userId: string): Observable<void>;

  abstract updateUserRoles(clientId: string, userId: string, data: { roles: string[] }): Observable<User>;

  abstract updateUserLockState(clientId: string, userId: string, data: { isLock: boolean }): Observable<User>;
}
