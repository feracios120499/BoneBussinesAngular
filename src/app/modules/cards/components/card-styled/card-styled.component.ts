import { Component, Input, OnInit } from '@angular/core';
import { AccountCard } from '@models/cards/account-card.model';
import { CardAccount } from '@models/cards/card-account.model';
import { CardDetails } from '@models/cards/card-details.model';
import { CustomCardsService } from '@modules/cards/services/custom-card-service/custom-card.service';

@Component({
  selector: 'app-card-styled',
  templateUrl: './card-styled.component.html',
  styleUrls: ['./card-styled.component.scss'],
})
export class CardStyledComponent implements OnInit {
  constructor(private customCardService: CustomCardsService) {}

  @Input() card!: AccountCard | CardDetails;
  @Input() animated = true;

  type!: string;
  plasticStatusBackgroundColor?: string;
  plasticStatusIcon?: string;
  cardStatusIcon?: string;
  cardStatusBackgroundColor?: string;
  ngOnInit(): void {
    this.type = this.customCardService.getType(this.card.type);
    if (this.card.plasticStatus) {
      this.plasticStatusBackgroundColor = this.customCardService.getBackgroundColor(this.card.plasticStatus);
      this.plasticStatusIcon = this.customCardService.getIcon(this.card.plasticStatus);
    }

    if ('depositAmount' in this.card) {
      this.cardStatusIcon = this.customCardService.getIcon(this.card.status);
      this.cardStatusBackgroundColor = this.customCardService.getBackgroundColor(this.card.status);
    }
  }

  showDetails(): void {}
}
