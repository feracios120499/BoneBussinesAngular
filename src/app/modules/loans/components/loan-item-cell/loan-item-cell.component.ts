import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

import { BaseInfoCellComponent } from 'src/app/@shared/components/base-info-cell.component';

@Component({
  selector: 'app-loan-item-cell',
  templateUrl: './loan-item-cell.component.html',
  styleUrls: ['./loan-item-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanItemCellComponent extends BaseInfoCellComponent {
  @Input() marked = false;

  @HostBinding('class')
  get classes(): string {
    return 'b1-base ' + (this.marked ? 'b1-light' : 'b1-color-dark b1-opacity-60');
  }
}
