import { Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseInputComponent } from '@form-controls/base-input.component';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.scss'],
  host: {
    class: 'cl-group',
  },
  providers: [provideValueAccessor(AuthInputComponent)],
})
export class AuthInputComponent extends BaseInputComponent {}
