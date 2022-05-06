import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentUpdateModel } from '@modules/correspondents/models/correspondent-update.model';
import { BaseCorrespondentsService } from './base-correspondents.service';
import { HttpCorrespondentsService } from './http-correspondents.service';
import { Store } from '@ngrx/store';
import { DemoCorrespondentsService } from './demo-correspondents.service';
import { AppSelectors } from '@store/app/selectors';

@Injectable({
  providedIn: 'root',
})
export class CorrespondentsService implements BaseCorrespondentsService {
  private correspondentsService: BaseCorrespondentsService;

  constructor(
    demoCorrespondentsService: DemoCorrespondentsService,
    httpCorrespondentsService: HttpCorrespondentsService,
    private store: Store
  ) {
    this.correspondentsService = httpCorrespondentsService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.correspondentsService = demoCorrespondentsService;
      } else {
        this.correspondentsService = httpCorrespondentsService;
      }
    });
  }

  getCorrespondents(clientId: string): Observable<Correspondent[]> {
    return this.correspondentsService.getCorrespondents(clientId);
  }

  createCorrespondent(clientId: string, correspondentData: CorrespondentForm): Observable<Correspondent> {
    return this.correspondentsService.createCorrespondent(clientId, correspondentData);
  }

  updateCorrespondent(clientId: string, correspondentData: CorrespondentUpdateModel): Observable<Correspondent> {
    return this.correspondentsService.updateCorrespondent(clientId, correspondentData);
  }

  deleteCorrespondent(clientId: string, correspondentId: string): Observable<void> {
    return this.correspondentsService.deleteCorrespondent(clientId, correspondentId);
  }
}
