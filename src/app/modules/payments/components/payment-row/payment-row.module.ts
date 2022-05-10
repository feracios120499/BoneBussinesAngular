import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B1PageCheckboxModule } from '@form-controls/b1-page-checkbox/b1-page-checkbox.module';
import { TranslateModule } from '@ngx-translate/core';
import { MoneyModule } from '@pipes/money/money.module';
import { PaymentRowComponent } from './payment-row.component';

@NgModule({
  declarations: [PaymentRowComponent],
  imports: [TranslateModule, B1PageCheckboxModule, FormsModule, CommonModule, MoneyModule],
  exports: [PaymentRowComponent],
})
export class PaymentRowModule {}
