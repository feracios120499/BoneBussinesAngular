import { Component, Input, OnInit } from '@angular/core';
import { AccountCard } from '@models/cards/account-card.model';
import { CardAccount } from '@models/cards/card-account.model';
import { CustomCardsService } from '@services/cards/custom-card.service';

@Component({
  selector: 'app-card-styled',
  templateUrl: './card-styled.component.html',
  styleUrls: ['./card-styled.component.scss']
})
export class CardStyledComponent implements OnInit {

  constructor(private customCardService: CustomCardsService) { }

  @Input() card!: AccountCard;

  type!: string;
  backgroundColor!: string;
  icon!: string;
  ngOnInit(): void {
    this.type = this.customCardService.getType(this.card.type);
    this.backgroundColor = this.customCardService.getBackgroundColor(this.card.plasticStatus);
    this.icon = this.customCardService.getIcon(this.card.plasticStatus);
  }

  showDetails(): void {

  }

}
