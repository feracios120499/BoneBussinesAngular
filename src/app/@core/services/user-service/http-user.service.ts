import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@models/profile.model';
import { BaseService } from '@services/base.service';
import { Observable } from 'rxjs';
import { BaseUserService } from './base-user.service';

@Injectable({
  providedIn: 'root',
})
export class HttpUserService extends BaseService implements BaseUserService {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('api/v1/user/profile');
  }
}
