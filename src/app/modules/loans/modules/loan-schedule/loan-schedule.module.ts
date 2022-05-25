import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SharedModule } from '@shared';
import { LoansHeaderModule } from '@modules/loans/components/loans-header/loans-header.module';
import { B1DetailsContainerModule } from '@containers/b1-details-container/b1-details-container.module';
import { MoneyModule } from '@pipes/money/money.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';

import { LoanScheduleComponent } from './loan-schedule.component';
import { LoanScheduleListComponent } from './components/loan-schedule-list/loan-schedule-list.component';
import { LoanScheduleItemComponent } from './components/loan-schedule-item/loan-schedule-item.component';
import { LoanScheduleItemCellComponent } from './components/loan-schedule-item-cell/loan-schedule-item-cell.component';
import { LoanScheduleActionsComponent } from './components/loan-schedule-actions/loan-schedule-actions.component';

@NgModule({
  declarations: [
    LoanScheduleComponent,
    LoanDetailsComponent,
    LoanScheduleListComponent,
    LoanScheduleItemComponent,
    LoanScheduleItemCellComponent,
    LoanScheduleActionsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    LoansHeaderModule,
    B1DetailsContainerModule,
    MoneyModule,
    B1DropdownModule,
    B1MoreButtonModule,
    WebClassModule,
    MobileClassModule,
    B1ButtonModule,
    B1ContentWrapperModule,
    B1CardLoaderModule,
    B1IconModule,
    SharedModule,
    NgScrollbarModule,
    NumberToArrayModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoanScheduleComponent,
      },
    ]),
  ],
})
export class LoanScheduleModule {}
