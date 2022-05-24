import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1PageCheckboxModule } from '@form-controls/b1-page-checkbox/b1-page-checkbox.module';
import { TranslateModule } from '@ngx-translate/core';
import { MoneyModule } from '@pipes/money/money.module';
import { PaymentRowComponent } from './payment-row.component';

@NgModule({
  declarations: [PaymentRowComponent],
  imports: [TranslateModule, B1PageCheckboxModule, FormsModule, CommonModule, MoneyModule, B1IconModule],
  exports: [PaymentRowComponent],
})
export class PaymentRowModule {}
