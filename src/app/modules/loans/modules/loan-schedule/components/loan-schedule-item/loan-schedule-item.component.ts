import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseSkeletonComponent } from '@directives/skeleton/base-skeleton.component';

import { LoanSchedule } from '@modules/loans/models/loan-schedule.model';

@Component({
  selector: 'app-loan-schedule-item',
  templateUrl: './loan-schedule-item.component.html',
  styleUrls: ['./loan-schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['skeletonMode'],
})
export class LoanScheduleItemComponent extends BaseSkeletonComponent {
  @Input() loanSchedule!: LoanSchedule;
  @Input() currencyCode!: string;
}
