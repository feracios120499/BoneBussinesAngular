import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';

import { BaseSkeletonComponent } from '@directives/skeleton/base-skeleton.component';
import { DepositsActions } from '../../store/actions';
import { Deposit } from '../../models/deposit.model';

@Component({
  selector: 'app-deposit-item',
  templateUrl: './deposit-item.component.html',
  styleUrls: ['./deposit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['skeletonMode'],
})
export class DepositItemComponent extends BaseSkeletonComponent {
  @Input() deposit!: Deposit;

  constructor(private store: Store) {
    super();
  }

  onDepositMakePayment(): void {
    this.store.dispatch(DepositsActions.makeDepositPayment({ deposit: this.deposit }));
  }

  get isClosed(): boolean {
    return dayjs().diff(this.deposit.endDate, 'days') > 0;
  }
}
