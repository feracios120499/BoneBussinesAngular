import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { LoanSchedule } from '@modules/loans/models/loan-schedule.model';

@Component({
  selector: 'app-loan-schedule-item',
  templateUrl: './loan-schedule-item.component.html',
  styleUrls: ['./loan-schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanScheduleItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() loanSchedule!: LoanSchedule;
  @Input() currencyCode!: string;

  ngOnInit(): void {
    this.checkRequiredProps(['loanSchedule', 'currencyCode']);
  }
}
