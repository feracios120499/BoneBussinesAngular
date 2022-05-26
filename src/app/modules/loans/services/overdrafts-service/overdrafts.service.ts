import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Overdraft } from '../../models/overdraft.model';
import { BaseOverdraftsService } from './base-overdrafts.service';
import { DemoOverdraftsService } from './demo-overdrafts.service';
import { HttpOverdraftsService } from './http-overdrafts.service';
import { AppSelectors } from '@store/app/selectors';

@Injectable({
  providedIn: 'root',
})
export class OverdraftsService implements BaseOverdraftsService {
  private overdraftsService: BaseOverdraftsService;

  constructor(
    demoOverdraftsService: DemoOverdraftsService,
    httpOverdraftsService: HttpOverdraftsService,
    private store: Store
  ) {
    this.overdraftsService = httpOverdraftsService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.overdraftsService = demoOverdraftsService;
      } else {
        this.overdraftsService = httpOverdraftsService;
      }
    });
  }

  getOverdrafts(clientId: string): Observable<Overdraft[]> {
    return this.overdraftsService.getOverdrafts(clientId);
  }
}
