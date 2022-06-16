import { Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { AuthInputComponent } from '../auth-input/auth-input.component';

@Component({
  selector: 'app-auth-password-input',
  templateUrl: './auth-password-input.component.html',
  styleUrls: ['./auth-password-input.component.scss', '../auth-input/auth-input.component.scss'],
  providers: [provideValueAccessor(AuthPasswordInputComponent)],
})
export class AuthPasswordInputComponent extends AuthInputComponent {
  isShownPassword = false;
}
