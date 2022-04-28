import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgrxFormsModule } from 'ngrx-forms';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { MobileMoreModule } from '@directives/mobile-more/mobile-more.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { MoreAutoDirectionModule } from '@directives/more-auto-direction/more-auto-direction.module';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { IbanModule } from '@directives/iban/iban.module';
import { MoneyModule } from '@pipes/money/money.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { B1DaterangepickerModule } from '@form-controls/b1-daterangepicker/b1-daterangepicker.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountEditModalComponent } from './components/account-edit-modal/account-edit-modal.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountTurnoversHeaderComponent } from './components/account-turnovers-header/account-turnovers-header.component';
import { AccountTurnoversListComponent } from './components/account-turnovers-list/account-turnovers-list.component';
import { AccountTurnoversComponent } from './components/account-turnovers/account-turnovers.component';
import { AccountTurnoverRowComponent } from './components/account-turnover-row/account-turnover-row.component';
import { AccountTransactionRowComponent } from './components/account-transaction-row/account-transaction-row.component';
import { AccountTransactionSkeletonComponent } from './components/account-transaction-skeleton/account-transaction-skeleton.component';
import { AccountTurnoverSkeletonComponent } from './components/account-turnover-skeleton/account-turnover-skeleton.component';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { AcctDetailsEffects } from './store/effects';

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
    AccountTurnoverRowComponent,
    AccountTransactionRowComponent,
    AccountTransactionSkeletonComponent,
    AccountTurnoverSkeletonComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveComponentModule,
    EffectsModule.forFeature([AcctDetailsEffects]),
    TranslateModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    NgrxFormsModule,
    WebClassModule,
    MobileClassModule,
    MobileMoreModule,
    MoreAutoDirectionModule,
    B1IconModule,
    B1PageButtonModule,
    IbanModule,
    MoneyModule,
    B1DaterangepickerModule,
    B1CardLoaderModule,
    CheckValueModule,
  ],
})
export class AccountModule {}
