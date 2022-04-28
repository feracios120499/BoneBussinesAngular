import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UiReissuApplication } from '@models/cards/ui-reissue-application.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CustomCardsService } from '@modules/cards/services/custom-card-service/custom-card.service';
import { SharedActions } from '@store/shared/actions';
import { Observable } from 'rxjs';
import { CardReissueActions } from '../../store/actions';

@Component({
  selector: 'app-reissue-applications-row',
  templateUrl: './reissue-applications-row.component.html',
  styleUrls: ['./reissue-applications-row.component.scss'],
})
export class ReissueApplicationsRowComponent implements OnInit {
  constructor(
    private store: Store,
    private customCardService: CustomCardsService,
    private translateService: TranslateService
  ) {}
  @Input() application!: UiReissuApplication;

  selected = new FormControl(false);
  form = new FormGroup({
    selected: this.selected,
  });
  ngOnInit(): void {
    console.log('init');
    this.selected.valueChanges.subscribe(() => {
      console.log(this.application);
      this.store.dispatch(CardReissueActions.selectApplication({ id: this.application.id }));
    });
  }

  selectApplication(event: any): void {
    event.stopPropagation();
    this.store.dispatch(CardReissueActions.selectApplication({ id: this.application.id }));
  }

  getImage(): Observable<string> {
    return this.customCardService.getImage(this.application.cardType, this.application.selected);
  }

  showHistory(): void {
    this.store.dispatch(CardReissueActions.showApplicationHistoryRequest(this.application));
  }
  showSignes(): void {
    this.store.dispatch(CardReissueActions.showApplicationSignRequest(this.application));
  }

  removeApplication(): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant('components.pay.areYouSureToDeletePayments').replace('{0}', 1),
          callback: () => this.store.dispatch(CardReissueActions.removeApplicationsRequest([this.application.id])),
        },
      })
    );
  }
}
