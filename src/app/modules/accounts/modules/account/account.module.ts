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
import { AccountTurnoversRowComponent } from './components/account-turnover-row/account-turnover-row.component';
import { AccountTransactionRowComponent } from './components/account-transaction-row/account-transaction-row.component';
import { AccountTransactionSkeletonComponent } from './components/account-transaction-skeleton/account-transaction-skeleton.component';
import { AccountTurnoverSkeletonComponent } from './components/account-turnover-skeleton/account-turnover-skeleton.component';
import { B1FormsModule } from 'src/app/@shared/modules/b1-forms/b1-forms.module';
import { B1PipesModule } from 'src/app/@shared/modules/b1-pipes/b1-pipes.module';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';


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
    AccountTransactionSkeletonComponent,
    AccountTurnoverSkeletonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    ReactiveComponentModule,
    EffectsModule.forFeature([AcctDetailsEffects]),
    B1FormsModule,
    B1PipesModule,
    B1DirectivesModule
  ]
})
export class AccountModule { }
