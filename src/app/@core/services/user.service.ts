import { Profile } from './../../@shared/models/profile.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

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
