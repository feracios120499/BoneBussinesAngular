import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { CorrespondentForm } from '@models/correspondents/correspondent-form.model';
import { CorrespondentUpdateModel } from '@models/correspondents/correspondent-update.model';

@Injectable({
  providedIn: 'root',
})
export class CorrespondentsService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getCorrespondents(clientId: string): Observable<Correspondent[]> {
    return this.http.get<Correspondent[]>(`api/v1/pay/recipients/${clientId}`);
  }

  createCorrespondent(
    clientId: string,
    correspondentData: CorrespondentForm
  ): Observable<Correspondent> {
    return this.http.post<Correspondent>(
      `api/v1/pay/recipients/${clientId}`,
      correspondentData
    );
  }

  updateCorrespondent(
    clientId: string,
    correspondentData: CorrespondentUpdateModel
  ): Observable<Correspondent> {
    return this.http.put<Correspondent>(
      `api/v1/pay/recipients/${clientId}`,
      correspondentData
    );
  }

  deleteCorrespondent(
    clientId: string,
    correspondentId: string
  ): Observable<void> {
    return this.http.delete<void>(
      `api/v1/pay/recipients/${correspondentId}/${clientId}`
    );
  }
}
