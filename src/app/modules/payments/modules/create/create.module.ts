import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { CreateMyAccountsModule } from './modules/create-my-accounts/create-my-accounts.module';
import { CreateTabsComponent } from './components/create-tabs/create-tabs.component';
import { SharedModule } from 'src/app/@shared/shared.module';


@NgModule({
  declarations: [
    CreateComponent,
    CreateTabsComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule
  ]
})
export class CreateModule { }
