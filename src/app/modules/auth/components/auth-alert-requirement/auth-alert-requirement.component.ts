import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  selector: 'app-auth-alert-requirement',
  templateUrl: './auth-alert-requirement.component.html',
  styleUrls: ['./auth-alert-requirement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthAlertRequirementComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() completed!: boolean;

  ngOnInit(): void {
    this.checkRequiredProps(['completed']);
  }
}
