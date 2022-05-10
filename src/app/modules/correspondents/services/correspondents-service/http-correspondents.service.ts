import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentUpdateModel } from '@modules/correspondents/models/correspondent-update.model';
import { BaseCorrespondentsService } from './base-correspondents.service';

@Injectable({
  providedIn: 'root',
})
export class HttpCorrespondentsService extends BaseService implements BaseCorrespondentsService {
  constructor(private http: HttpClient) {
    super();
  }

  getCorrespondents(clientId: string): Observable<Correspondent[]> {
    return this.http.get<Correspondent[]>(`api/v1/pay/recipients/${clientId}`);
  }

  createCorrespondent(clientId: string, correspondentData: CorrespondentForm): Observable<Correspondent> {
    return this.http.post<Correspondent>(`api/v1/pay/recipients/${clientId}`, correspondentData);
  }

  updateCorrespondent(clientId: string, correspondentData: CorrespondentUpdateModel): Observable<Correspondent> {
    return this.http.put<Correspondent>(`api/v1/pay/recipients/${clientId}`, correspondentData);
  }

  deleteCorrespondent(clientId: string, correspondentId: string): Observable<void> {
    return this.http.delete<void>(`api/v1/pay/recipients/${correspondentId}/${clientId}`);
  }
}
