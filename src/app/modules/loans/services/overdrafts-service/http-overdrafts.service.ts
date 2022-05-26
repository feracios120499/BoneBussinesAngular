import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { BaseOverdraftsService } from './base-overdrafts.service';
import { Overdraft } from '../../models/overdraft.model';

@Injectable({
  providedIn: 'root',
})
export class HttpOverdraftsService extends BaseService implements BaseOverdraftsService {
  constructor(private http: HttpClient) {
    super();
  }

  getOverdrafts(clientId: string): Observable<Overdraft[]> {
    return this.http.get<Overdraft[]>(`api/v1/loan/overdrafts/list/${clientId}`);
  }
}
