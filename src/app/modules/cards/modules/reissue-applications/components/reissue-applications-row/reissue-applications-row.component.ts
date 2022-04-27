import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UiReissuApplication } from '@models/cards/ui-reissue-application.model';
import { Store } from '@ngrx/store';
import { CustomCardsService } from '@services/cards/custom-card.service';
import { CardReissueActions } from '@store/cards/reissue/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reissue-applications-row',
  templateUrl: './reissue-applications-row.component.html',
  styleUrls: ['./reissue-applications-row.component.scss'],
})
export class ReissueApplicationsRowComponent implements OnInit {
  constructor(
    private store: Store,
    private customCardService: CustomCardsService
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
      this.store.dispatch(
        CardReissueActions.selectApplication({ id: this.application.id })
      );
    });
  }

  selectApplication(event: any): void {
    event.stopPropagation();
    this.store.dispatch(
      CardReissueActions.selectApplication({ id: this.application.id })
    );
  }

  getImage(): Observable<string> {
    return this.customCardService.getImage(
      this.application.cardType,
      this.application.selected
    );
  }

  showHistory(): void {
    this.store.dispatch(
      CardReissueActions.showApplicationHistoryRequest(this.application)
    );
  }
  showSignes(): void {}

  removeApplication(): void {}
}
