import { Component, Input, OnInit } from '@angular/core';
import { AccountCard } from '@models/cards/account-card.model';
import { CardDetails } from '@models/cards/card-details.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';

@Component({
  selector: 'app-reissue-application-modal',
  templateUrl: './reissue-application-modal.component.html',
  styleUrls: ['./reissue-application-modal.component.scss'],
})
export class ReissueApplicationModalComponent implements OnInit {
  constructor() {}

  @Input() application!: ReissueApplicationDetails;
  card!: AccountCard;
  ngOnInit(): void {
    this.card = {
      number: this.application.cardNumber,
      accountNumber: '',
      expired: this.application.newExpiredDate,
      fullNameEng: this.application.cardOwnerName,
      isAbleToReissue: false,
      id: this.application.cardId,
      name: this.application.cardOwnerName,
      type: this.application.cardType,
    };
  }
}
