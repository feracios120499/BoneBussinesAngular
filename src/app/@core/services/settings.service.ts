import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
        return this.http.get<any>('api/v1/public/resources').pipe(map((response) => response.Result ? response.Result : response));
    }
}
