import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { User } from '@models/users/user.model';

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
}
