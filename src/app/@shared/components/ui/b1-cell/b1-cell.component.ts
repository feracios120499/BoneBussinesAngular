import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { withLabel } from '@mixins/with-label.mixin';
import { BaseSkeletonComponent } from '@directives/skeleton/base-skeleton.component';

@Component({
  selector: 'b1-cell',
  templateUrl: './b1-cell.component.html',
  styleUrls: ['./b1-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['skeletonMode'],
})
export class B1CellComponent extends withLabel(BaseSkeletonComponent) {
  @Input() negative = false;
}
