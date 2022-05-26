import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseInfoCellComponent } from '../../../base-info-cell.component';

@Component({
  selector: 'b1-details-cell',
  templateUrl: './b1-details-cell.component.html',
  styleUrls: ['./b1-details-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1DetailsCellComponent extends BaseInfoCellComponent {}
