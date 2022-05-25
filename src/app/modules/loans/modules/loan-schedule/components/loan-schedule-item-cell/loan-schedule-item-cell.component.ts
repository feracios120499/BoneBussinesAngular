import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BaseInfoCellComponent } from 'src/app/@shared/components/base-info-cell.component';

@Component({
  selector: 'app-loan-schedule-item-cell',
  templateUrl: './loan-schedule-item-cell.component.html',
  styleUrls: ['./loan-schedule-item-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanScheduleItemCellComponent extends BaseInfoCellComponent {
  @Input() negative = false;
}
