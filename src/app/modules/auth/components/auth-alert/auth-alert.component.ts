import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { fade } from '@animations/fade.animation';

@Component({
  selector: 'app-auth-alert',
  templateUrl: './auth-alert.component.html',
  styleUrls: ['./auth-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade(200)],
})
export class AuthAlertComponent {
  @HostBinding('@fade') fadeAnimation = true;
}
