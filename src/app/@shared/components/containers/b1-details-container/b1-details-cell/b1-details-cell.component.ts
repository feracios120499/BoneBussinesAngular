import { Component, ChangeDetectionStrategy } from '@angular/core';

import { withLabel } from '@mixins/with-label.mixin';

@Component({
  selector: 'b1-details-cell',
  templateUrl: './b1-details-cell.component.html',
  styleUrls: ['./b1-details-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1DetailsCellComponent extends withLabel() {}
