import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { IbanModule } from '@directives/iban/iban.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1ListDocumentsModule } from '@form-controls/b1-list-documents/b1-list-documents.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { FirstTitleModule } from '@pipes/first-title/first-title.module';
import { MoneyModule } from '@pipes/money/money.module';
import { SwiftConfirmComponent } from './swift-confirm.component';

@NgModule({
  declarations: [SwiftConfirmComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    FirstTitleModule,
    B1IconModule,
    FormsModule,
    B1InputModule,
    IbanModule,
    MoneyModule,
    B1ListDocumentsModule,
  ],
  exports: [SwiftConfirmComponent],
})
export class SwiftConfirmModule {}
