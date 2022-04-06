import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '@services/base.service';
import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';

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

  private mapResponse = (res: (Role & { menus: string })[]): Role[] => {
    return res.map(({ menus, ...rest }) => ({
      ...rest,
      menus: menus.split(','),
    }));
  };
}
