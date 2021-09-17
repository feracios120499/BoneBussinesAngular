import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMyAccountsRoutingModule } from './create-my-accounts-routing.module';
import { CreateMyAccountsComponent } from './create-my-accounts.component';


@NgModule({
  declarations: [
    CreateMyAccountsComponent
  ],
  imports: [
    CommonModule,
    CreateMyAccountsRoutingModule
  ]
})
export class CreateMyAccountsModule { }
