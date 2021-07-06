import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resources } from 'src/app/@shared/models/resources.model';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsService extends BaseService {

    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getResources(): Observable<Resources> {
        return this.http.get<Resources>('api/v1/public/resources');
    }
}
