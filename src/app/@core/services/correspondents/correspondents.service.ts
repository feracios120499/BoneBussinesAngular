import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { Correspondent } from '@models/correspondents/correspondent.model';

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
}
