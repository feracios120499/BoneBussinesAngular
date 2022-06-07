import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrencySum } from '@models/item-sum.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'b1-currency-sum',
  templateUrl: './b1-currency-sum.component.html',
  styleUrls: ['./b1-currency-sum.component.scss'],
})
export class B1CurrencySumComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() currencySum!: CurrencySum;
  @Input() separator = ' | ';
  @Input() divider = 100;

  array: any[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    this.array = [];
    for (const [key, value] of Object.entries(this.currencySum)) {
      this.array.push({ currency: key, amount: value });
    }
  }

  ngOnInit(): void {}
}
