import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '@services/base.service';
import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';
import { FoundUser } from '@models/users/found-user.model';
import { UserSignInError } from '@models/users/user-sign-in-error.model';
import { UserNameModel } from '@models/users/user-name.model';
import { UserSignInModel } from '@models/users/user-sign-in.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(clientId: string): Observable<User[]> {
    return this.http.get<User[]>(`api/v1/users/${clientId}`);
  }

  getRoles(clientId: string): Observable<Role[]> {
    return this.http
      .get<(Role & { menus: string })[]>(`api/v1/users/roles/${clientId}`)
      .pipe(map(this.mapResponse));
  }

  findUser(
    clientId: string,
    data: Pick<User, 'phoneNumber' | 'email'>
  ): Observable<FoundUser | UserSignInError> {
    return this.http.post<FoundUser | UserSignInError>(
      `api/v1/users/find/${clientId}`,
      data
    );
  }

  createUser(
    clientId: string,
    userData: UserNameModel & UserSignInModel
  ): Observable<User> {
    return this.http.post<User>(`api/v1/users/${clientId}`, userData);
  }

  restoreUser(
    clientId: string,
    userId: string,
    data: { roles: string[] }
  ): Observable<User | UserSignInError> {
    return this.http.post<User | UserSignInError>(
      `api/v1/users/${userId}/attach/${clientId}`,
      data
    );
  }

  deleteUser(clientId: string, userId: string): Observable<null> {
    return this.http
      .delete<null>(`api/v1/users/${userId}/${clientId}`)
      .pipe(map(() => null));
  }

  updateUserRoles(
    clientId: string,
    userId: string,
    data: { roles: string[] }
  ): Observable<User> {
    return this.http.put<User>(
      `api/v1/users/${userId}/roles/${clientId}`,
      data
    );
  }

  updateUserLockState(
    clientId: string,
    userId: string,
    data: { isLock: boolean }
  ): Observable<User> {
    return this.http.put<User>(`api/v1/users/${userId}/lock/${clientId}`, data);
  }

  private mapResponse = (res: (Role & { menus: string })[]): Role[] => {
    return res.map(({ menus, ...rest }) => ({
      ...rest,
      menus: menus.split(','),
    }));
  };
}
