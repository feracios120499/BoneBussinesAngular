import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { BaseDepositsService } from './base-deposits.service';
import { Deposit } from '../../models/deposit.model';

@Injectable({
  providedIn: 'root',
})
export class HttpDepositsService extends BaseService implements BaseDepositsService {
  constructor(private http: HttpClient) {
    super();
  }

  getDeposits(clientId: string): Observable<Deposit[]> {
    return this.http.get<Deposit[]>(`api/v1/dpt/deposits/${clientId}`);
  }
}
