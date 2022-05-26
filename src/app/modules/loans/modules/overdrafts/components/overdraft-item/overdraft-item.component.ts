import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseSkeletonComponent } from '@directives/skeleton/base-skeleton.component';

import { Overdraft } from '@modules/loans/models/overdraft.model';

@Component({
  selector: 'app-overdraft-item',
  templateUrl: './overdraft-item.component.html',
  styleUrls: ['./overdraft-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['skeletonMode'],
})
export class OverdraftItemComponent extends BaseSkeletonComponent {
  @Input() overdraft!: Overdraft;
}
