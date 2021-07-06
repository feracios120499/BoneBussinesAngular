import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Notification } from 'src/app/@shared/models/notification.model';


@Injectable({
    providedIn: 'root'
})
export class NotificationsService extends BaseService {

    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getNotifications(userId: string): Observable<Array<Notification>> {
        return this.http.get<Array<Notification>>(`api/v1/notify/${userId}`);
    }
}
