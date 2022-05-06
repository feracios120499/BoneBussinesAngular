import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppSelectors } from '@store/app/selectors';
import { User } from '@modules/users/models/user.model';
import { Role } from '@modules/users/models/role.model';
import { FoundUser } from '@modules/users/models/found-user.model';
import { UserNameForm } from '@modules/users/models/user-name-form.model';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { BaseUsersService } from './base-users.service';
import { HttpUsersService } from './http-users.service';

import { DemoUsersService } from './demo-users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements BaseUsersService {
  private usersService: BaseUsersService;

  constructor(demoUsersService: DemoUsersService, httpUsersService: HttpUsersService, private store: Store) {
    this.usersService = httpUsersService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo: boolean) => {
      if (isDemo) {
        this.usersService = demoUsersService;
      } else {
        this.usersService = httpUsersService;
      }
    });
  }

  getUsers(clientId: string): Observable<User[]> {
    return this.usersService.getUsers(clientId);
  }

  getRoles(clientId: string): Observable<Role[]> {
    return this.usersService.getRoles(clientId);
  }

  findUser(clientId: string, userData: { phoneNumber: string; email: string }): Observable<FoundUser> {
    return this.usersService.findUser(clientId, userData);
  }

  createUser(clientId: string, userData: UserNameForm & UserRolesForm): Observable<User> {
    return this.usersService.createUser(clientId, userData);
  }

  restoreUser(clientId: string, userId: string, userData: { roles: string[] }): Observable<User> {
    return this.usersService.restoreUser(clientId, userId, userData);
  }

  deleteUser(clientId: string, userId: string): Observable<void> {
    return this.usersService.deleteUser(clientId, userId);
  }

  updateUserRoles(clientId: string, userId: string, data: { roles: string[] }): Observable<User> {
    return this.usersService.updateUserRoles(clientId, userId, data);
  }

  updateUserLockState(clientId: string, userId: string, data: { isLock: boolean }): Observable<User> {
    return this.usersService.updateUserLockState(clientId, userId, data);
  }
}
