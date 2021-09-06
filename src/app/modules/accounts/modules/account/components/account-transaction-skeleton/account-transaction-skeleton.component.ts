import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'account-transaction-skeleton',
  templateUrl: './account-transaction-skeleton.component.html',
  styleUrls: ['./account-transaction-skeleton.component.scss', './../account-transaction-row/account-transaction-row.component.scss']
})
export class AccountTransactionSkeletonComponent implements OnInit {

  @Input() count!: number;
  array!: number[];
  constructor() {
  }

  ngOnInit(): void {
    this.array = Array.from(Array(this.count).keys());
  }

}
