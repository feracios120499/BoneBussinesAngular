import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { MoneyModule } from '@pipes/money/money.module';
import { IbanModule } from '@directives/iban/iban.module';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';

import { B1AccountSelectComponent } from './b1-account-select.component';

@NgModule({
  declarations: [B1AccountSelectComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveComponentModule,
    NgSelectModule,
    NgxSkeletonLoaderModule,
    MoneyModule,
    B1IconModule,
    IbanModule,
    NgSelectScrollModule,
  ],
  exports: [B1AccountSelectComponent],
})
export class B1AccountSelectModule {}
