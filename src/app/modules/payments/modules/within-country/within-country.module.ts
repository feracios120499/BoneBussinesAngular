import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithinCountryComponent } from './within-country.component';
import { SharedPaymentModule } from 'src/app/@shared/modules/shared-payment/shared-payment.module';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { WithinCountryRoutingModule } from './within-country-routing.module';
import { B1FormsModule } from 'src/app/@shared/modules/b1-forms/b1-forms.module';


@NgModule({
  declarations: [
    WithinCountryComponent
  ],
  imports: [
    CommonModule,
    WithinCountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPaymentModule,
    TranslateModule,
    B1DirectivesModule,
    ReactiveComponentModule,
    B1FormsModule
  ]
})
export class WithinCountryModule { }
