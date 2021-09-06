import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { AcctDetailsEffects } from '@store/acct/details/effects';
import { SharedModule } from 'src/app/@shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountEditModalComponent } from './components/account-edit-modal/account-edit-modal.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import {
  AccountTurnoversHeaderComponent,
} from './components/account-turnovers-header/account-turnovers-header.component';
import {
  AccountTurnoversListComponent,
} from './components/account-turnovers-list/account-turnovers-list.component';
import { AccountTurnoversComponent } from './components/account-turnovers/account-turnovers.component';
import { AccountTurnoversRowComponent } from './components/account-turnovers-row/account-turnovers-row.component';
import { AccountTransactionRowComponent } from './components/account-transaction-row/account-transaction-row.component';
import { AccountTransactionSkeletonComponent } from './components/account-transaction-skeleton/account-transaction-skeleton.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountCardComponent,
    AccountHeaderComponent,
    AccountDetailsComponent,
    AccountEditModalComponent,
    AccountTurnoversComponent,
    AccountTurnoversHeaderComponent,
    AccountTurnoversListComponent,
    AccountTurnoversRowComponent,
    AccountTransactionRowComponent,
    AccountTransactionSkeletonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    ReactiveComponentModule,
    EffectsModule.forFeature([AcctDetailsEffects])
  ]
})
export class AccountModule { }
