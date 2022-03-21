import { Component, Input, OnInit } from '@angular/core';
import { AccountCard } from '@models/cards/account-card.model';
import { CustomCardsService } from '@services/cards/custom-card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss']
})
export class CardRowComponent implements OnInit {

  constructor(private customCardsService: CustomCardsService) { }

  @Input() card!: AccountCard;
  image$!: Observable<string>;
  ngOnInit(): void {
    this.image$ = this.customCardsService.getImage(this.card.type, false);
  }

}
