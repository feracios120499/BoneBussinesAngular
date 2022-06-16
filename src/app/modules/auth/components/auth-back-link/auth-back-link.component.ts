import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-auth-back-link',
  templateUrl: './auth-back-link.component.html',
  styleUrls: ['./auth-back-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBackLinkComponent {
  @Input() to: string | any[] = ['/', 'auth', 'logon'];
}
