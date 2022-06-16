import { Component, Input, OnInit } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { AuthInputComponent } from '../auth-input/auth-input.component';

@Component({
  selector: 'app-auth-phone-input',
  templateUrl: './auth-phone-input.component.html',
  styleUrls: ['./auth-phone-input.component.scss', '../auth-input/auth-input.component.scss'],
  providers: [provideValueAccessor(AuthPhoneInputComponent)],
})
export class AuthPhoneInputComponent extends AuthInputComponent implements OnInit {
  @Input() prefix!: string;

  override ngOnInit(): void {
    super.ngOnInit();
    this.checkRequiredProps(['prefix']);
  }

  // to escape warning about using 'disabled'-attribute
  // when passing 'formControl' to 'input'-element:
  override setDisabledState(isDisabled: boolean): void {
    // needs to be wrapped in setTimout to avoid an error:
    setTimeout(() => this.renderer.setProperty(this.formControlRef.nativeElement, 'disabled', isDisabled));
  }
}
