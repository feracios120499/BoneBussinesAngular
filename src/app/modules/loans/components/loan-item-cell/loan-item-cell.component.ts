import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

import { withLabel } from '@mixins/with-label.mixin';

@Component({
  selector: 'app-loan-item-cell',
  templateUrl: './loan-item-cell.component.html',
  styleUrls: ['./loan-item-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanItemCellComponent extends withLabel() {
  @Input() marked = false;

  @HostBinding('class')
  get classes(): string {
    return 'b1-base ' + (this.marked ? 'b1-light' : 'b1-color-dark b1-opacity-60');
  }
}
