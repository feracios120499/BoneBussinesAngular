import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { User } from '@modules/users/models/user.model';
import { Role } from '@modules/users/models/role.model';
import { FoundUser } from '@modules/users/models/found-user.model';
import { UserNameForm } from '@modules/users/models/user-name-form.model';
import { UserRolesForm } from '@modules/users/models/user-roles-form.model';
import { DemoError } from '@models/errors/demo-error.model';
import { BaseUsersService } from './base-users.service';

@Injectable({ providedIn: 'root' })
export class DemoUsersService extends BaseUsersService {
  private users: User[] = [
    {
      id: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c2',
      displayName: 'Darth Veider',
      firstName: 'Darth',
      lastName: 'Veider',
      patronymic: 'Plegas',
      phoneNumber: '+1450767877',
      email: 'darthveider@ub.com',
      isDisable: false,
      isDeletable: true,
      signNumber: null,
      roles: ['AccountsViewer'],
      pictureUrl: null,
      clientId: '4cc37607-a216-4814-b2be-845560d698e5',
    },
  ];

  private roles: Role[] = [
    {
      roleString: 'SalaryAccountant',
      menus: ['accounts', 'salary', 'payments', 'supdocuments'],
      role: 'SalaryAccountant',
    },
    {
      roleString: 'AccountsViewer',
      menus: ['accounts'],
      role: 'AccountsViewer',
    },
    {
      roleString: 'LoansViewer',
      menus: ['loans'],
      role: 'LoansViewer',
    },
    {
      roleString: 'DepositsViewer',
      menus: ['deposits'],
      role: 'DepositsViewer',
    },
    {
      roleString: 'PaymentsManager',
      menus: ['accounts', 'payments'],
      role: 'PaymentsManager',
    },
    {
      roleString: 'ForeignCurrencyPaymentsManager',
      menus: ['accounts', 'payments'],
      role: 'ForeignCurrencyPaymentsManager',
    },
    {
      roleString: 'ForeignCurrencyApplicationsManager',
      menus: ['accounts', 'applications', 'supdocuments'],
      role: 'ForeignCurrencyApplicationsManager',
    },
    {
      roleString: 'CorpCardsViewer',
      menus: ['accounts', 'corpcards'],
      role: 'CorpCardsViewer',
    },
  ];

  getUsers(clientId: string): Observable<User[]> {
    return of(this.users);
  }

  getRoles(clientId: string): Observable<Role[]> {
    return of(this.roles);
  }

  findUser(clientId: string, userData: { phoneNumber: string; email: string }): Observable<FoundUser> {
    return throwError(new DemoError());
  }

  createUser(clientId: string, userData: UserNameForm & UserRolesForm): Observable<User> {
    return throwError(new DemoError());
  }

  restoreUser(clientId: string, userId: string, userData: { roles: string[] }): Observable<User> {
    return throwError(new DemoError());
  }

  deleteUser(clientId: string, userId: string): Observable<void> {
    return throwError(new DemoError());
  }

  updateUserRoles(clientId: string, userId: string, data: { roles: string[] }): Observable<User> {
    return throwError(new DemoError());
  }

  updateUserLockState(clientId: string, userId: string, data: { isLock: boolean }): Observable<User> {
    return throwError(new DemoError());
  }
}
