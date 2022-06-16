import { Component, Input } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseInputComponent } from '@form-controls/base-input.component';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.scss'],
  providers: [provideValueAccessor(AuthInputComponent)],
})
export class AuthInputComponent extends BaseInputComponent {
  @Input() showError = false;
}
