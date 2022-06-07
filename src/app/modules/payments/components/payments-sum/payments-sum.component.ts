import { Component, Input, OnInit } from '@angular/core';
import { ItemSum } from '@models/item-sum.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments-sum',
  templateUrl: './payments-sum.component.html',
  styleUrls: ['./payments-sum.component.scss'],
})
export class PaymentsSumComponent implements OnInit {
  @Input() sum$!: Observable<ItemSum>;
  @Input() selectedSum$?: Observable<ItemSum>;

  constructor() {}

  ngOnInit(): void {}
}
