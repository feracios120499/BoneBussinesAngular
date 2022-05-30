import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Deposit } from '../../models/deposit.model';
import { BaseDepositsService } from './base-deposits.service';
import { DemoDepositsService } from './demo-deposits.service';
import { HttpDepositsService } from './http-deposits.service';
import { AppSelectors } from '@store/app/selectors';

@Injectable({
  providedIn: 'root',
})
export class DepositsService implements BaseDepositsService {
  private depositsService: BaseDepositsService;

  constructor(
    demoDepositsService: DemoDepositsService,
    httpDepositsService: HttpDepositsService,
    private store: Store
  ) {
    this.depositsService = httpDepositsService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.depositsService = demoDepositsService;
      } else {
        this.depositsService = httpDepositsService;
      }
    });
  }

  getDeposits(clientId: string): Observable<Deposit[]> {
    return this.depositsService.getDeposits(clientId);
  }
}
