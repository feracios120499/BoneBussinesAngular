import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@shared';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';
import { SkeletonModule } from '@directives/skeleton/skeleton.module';
import { B1CellModule } from '@ui/b1-cell/b1-cell.module';
import { MoneyModule } from '@pipes/money/money.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { DepositsComponent } from './deposits.component';
import { DepositsHeaderComponent } from './components/deposits-header/deposits-header.component';
import { DepositsActionsComponent } from './components/deposits-actions/deposits-actions.component';
import { DepositsListComponent } from './components/deposits-list/deposits-list.component';
import { DepositItemComponent } from './components/deposit-item/deposit-item.component';
import { DepositItemStatusComponent } from './components/deposit-item-status/deposit-item-status.component';

import { DepositsFilterPipe } from './pipes/deposits-filter.pipe';
import { DepositsEffects } from './store/effects';

@NgModule({
  declarations: [
    DepositsComponent,
    DepositsHeaderComponent,
    DepositsActionsComponent,
    DepositsListComponent,
    DepositItemComponent,
    DepositsFilterPipe,
    DepositItemStatusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveComponentModule,
    B1InputModule,
    B1CardLoaderModule,
    SharedModule,
    NgScrollbarModule,
    B1EmptyModule,
    NumberToArrayModule,
    SkeletonModule,
    B1CellModule,
    MoneyModule,
    B1DropdownModule,
    B1MoreButtonModule,
    NgbModule,
    B1IconModule,
    EffectsModule.forFeature([DepositsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: DepositsComponent,
      },
    ]),
  ],
})
export class DepositsModule {}
