import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountsRoutingModule } from './my-accounts-routing.module';
import { MyAccountsComponent } from './my-accounts.component';
import { SharedPaymentModule } from 'src/app/@shared/modules/shared-payment/shared-payment.module';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { B1FormsModule } from 'src/app/@shared/modules/b1-forms/b1-forms.module';


@NgModule({
  declarations: [
    MyAccountsComponent
  ],
  imports: [
    CommonModule,
    MyAccountsRoutingModule,
    SharedPaymentModule,
    FormsModule,
    ReactiveComponentModule,
    TranslateModule,
    B1DirectivesModule,
    B1FormsModule
  ]
})
export class MyAccountsModule { }
