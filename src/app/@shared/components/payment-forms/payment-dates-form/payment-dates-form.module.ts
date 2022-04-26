import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { B1SinglePickerModule } from '@form-controls/b1-single-picker/b1-single-picker.module';

import { PaymentDatesFormComponent } from './payment-dates-form.component';

@NgModule({
  declarations: [PaymentDatesFormComponent],
  imports: [TranslateModule, ReactiveFormsModule, B1SinglePickerModule],
  exports: [PaymentDatesFormComponent],
})
export class PaymentDatesFormModule {}
