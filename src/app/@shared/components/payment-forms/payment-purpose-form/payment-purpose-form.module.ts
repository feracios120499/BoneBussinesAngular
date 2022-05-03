import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgSelectModule } from '@ng-select/ng-select';

import { B1InputErrorModule } from '@form-controls/b1-input-error/b1-input-error.module';
import { DecimalNumbersModule } from '@directives/decimal-numbers/decimal-numbers.module';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';
import { OnlyNumbersModule } from '@directives/only-numbers/only-numbers.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1SinglePickerModule } from '@form-controls/b1-single-picker/b1-single-picker.module';
import { B1TextareaModule } from '@form-controls/b1-textarea/b1-textarea.module';
import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { B1NumberInputModule } from '@form-controls/b1-number-input/b1-number-input.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';

import { PaymentPurposeFormComponent } from './payment-purpose-form.component';
import { CheckValueModule } from '@directives/check-value/check-value.module';

@NgModule({
  declarations: [PaymentPurposeFormComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    FormsModule,
    B1InputErrorModule,
    DecimalNumbersModule,
    NgSelectModule,
    NgSelectScrollModule,
    OnlyNumbersModule,
    B1IconModule,
    B1SinglePickerModule,
    CheckValueModule,
    B1TextareaModule,
    B1CheckboxModule,
    B1NumberInputModule,
    B1InputModule,
    B1ButtonModule,
  ],
  exports: [PaymentPurposeFormComponent],
})
export class PaymentPurposeFormModule {}
