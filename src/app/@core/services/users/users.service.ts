import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '@services/base.service';
import { User } from '@models/users/user.model';
import { Role } from '@models/users/role.model';
import { FoundUser } from '@models/users/found-user.model';
import { UserNameForm } from '@models/users/user-name-form.model';
import { UserRolesForm } from '@models/users/user-roles-form.model';

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
    userData: { phoneNumber: string; email: string }
  ): Observable<FoundUser> {
    return this.http.post<FoundUser>(`api/v1/users/find/${clientId}`, userData);
  }

  createUser(
    clientId: string,
    userData: UserNameForm & UserRolesForm
  ): Observable<User> {
    return this.http.post<User>(`api/v1/users/${clientId}`, userData);
  }

  restoreUser(
    clientId: string,
    userId: string,
    userData: { roles: string[] }
  ): Observable<User> {
    return this.http.post<User>(
      `api/v1/users/${userId}/attach/${clientId}`,
      userData
    );
  }

  deleteUser(clientId: string, userId: string): Observable<void> {
    return this.http.delete<void>(`api/v1/users/${userId}/${clientId}`);
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
