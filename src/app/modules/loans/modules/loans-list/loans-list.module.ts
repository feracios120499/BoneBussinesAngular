import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SharedModule } from '@shared';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';
import { MoneyModule } from '@pipes/money/money.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { LoanItemCellModule } from '@modules/loans/components/loan-item-cell/loan-item-cell.module';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';
import { SkeletonModule } from '@directives/skeleton/skeleton.module';

import { LoansListComponent } from './loans-list.component';
import { LoansActionsComponent } from './components/loans-actions/loans-actions.component';
import { LoanItemComponent } from './components/loan-item/loan-item.component';

import { LoansFilterPipe } from './pipes/loans-filter.pipe';

@NgModule({
  declarations: [LoansActionsComponent, LoansListComponent, LoanItemComponent, LoansFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    TranslateModule,
    B1InputModule,
    B1CardLoaderModule,
    SharedModule,
    NgScrollbarModule,
    B1EmptyModule,
    B1DropdownModule,
    B1MoreButtonModule,
    NumberToArrayModule,
    MoneyModule,
    WebClassModule,
    MobileClassModule,
    LoanItemCellModule,
    B1PageSeparatorModule,
    SkeletonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoansListComponent,
      },
    ]),
  ],
})
export class LoansListModule {}
