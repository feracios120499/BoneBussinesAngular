import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { DepositStatus } from '../../models/deposit-status.type';

interface StatusConfig {
  label: string;
  icon: string;
}

const config: { [key in DepositStatus]: StatusConfig } = {
  closed: {
    label: 'components.dpt.statuses.ended',
    icon: 'not-allowed',
  },
  prolonged: {
    label: 'components.dpt.statuses.prolonged',
    icon: 'spinner',
  },
};

@Component({
  selector: 'app-deposit-item-status',
  templateUrl: './deposit-item-status.component.html',
  styleUrls: ['./deposit-item-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositItemStatusComponent extends withRequiredPropsCheck() implements OnInit {
  @HostBinding('class') @Input() status!: DepositStatus;

  config!: StatusConfig;

  ngOnInit(): void {
    this.checkRequiredProps(['status']);
    this.config = config[this.status];
  }
}
