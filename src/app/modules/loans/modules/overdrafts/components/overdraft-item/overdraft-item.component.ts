import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { Overdraft } from '@modules/loans/models/overdraft.model';

@Component({
  selector: 'app-overdraft-item',
  templateUrl: './overdraft-item.component.html',
  styleUrls: ['./overdraft-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverdraftItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() overdraft!: Overdraft;

  ngOnInit(): void {
    this.checkRequiredProps(['overdraft']);
  }
}
