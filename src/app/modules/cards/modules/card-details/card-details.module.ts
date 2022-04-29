import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MoneyModule } from '@pipes/money/money.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { B1CardNumberModule } from '@ui/b1-card-number/b1-card-number.module';
import { MobileMoreModule } from '@directives/mobile-more/mobile-more.module';
import { CheckRoleModule } from '@directives/check-role/check-role.module';
import { B1WarningBlockModule } from '@containers/b1-warning-block/b1-warning-block.module';
import { CardDetailsRoutingModule } from './card-details-routing.module';
import { CardsHeaderModule } from '../cards-header/cards-header.module';
import { CardStyledModule } from '@modules/cards/components/card-styled/card-styled.module';
import { CardStyledSkeletonModule } from '@modules/cards/components/card-styled-skeleton/card-styled-skeleton.module';
import { MoreAutoDirectionModule } from '@directives/more-auto-direction/more-auto-direction.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1PageButtonModule } from '@ui/b1-page-button/b1-page-button.module';
import { IbanModule } from '@directives/iban/iban.module';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';
import { B1DaterangepickerModule } from '@form-controls/b1-daterangepicker/b1-daterangepicker.module';
import { B1InputAmountModule } from '@form-controls/b1-input-amount/b1-input-amount.module';
import { FirstTitleModule } from '@pipes/first-title/first-title.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';

import { CardDetailsComponent } from './card-details.component';
import { CardDetailsTabsComponent } from './components/card-details-tabs/card-details-tabs.component';
import { CardDetailsInfoComponent } from './components/card-details-info/card-details-info.component';
import { CardDetailsLimitsComponent } from './components/card-details-limits/card-details-limits.component';
import { CardDetailsServicesComponent } from './components/card-details-services/card-details-services.component';
import { CardDetailsHeaderComponent } from './components/card-details-header/card-details-header.component';
import { EditLimitModalComponent } from './components/edit-limit-modal/edit-limit-modal.component';
import { LockCardConfirmComponent } from './components/lock-card-confirm/lock-card-confirm.component';
import { ReissueApplicationModalComponent } from './components/reissue-application-modal/reissue-application-modal.component';
import { CardStatementModalComponent } from './components/card-statement-modal/card-statement-modal.component';

import { CardDetailsEffects } from '@store/cards/details/effects';

@NgModule({
  declarations: [
    CardDetailsComponent,
    CardDetailsTabsComponent,
    CardDetailsInfoComponent,
    CardDetailsLimitsComponent,
    CardDetailsServicesComponent,
    CardDetailsHeaderComponent,
    EditLimitModalComponent,
    LockCardConfirmComponent,
    ReissueApplicationModalComponent,
    CardStatementModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    FormsModule,
    CardDetailsRoutingModule,
    CardsHeaderModule,
    CardStyledModule,
    CardStyledSkeletonModule,
    TranslateModule,
    B1WarningBlockModule,
    CheckRoleModule,
    WebClassModule,
    MobileMoreModule,
    MoreAutoDirectionModule,
    B1IconModule,
    B1PageButtonModule,
    IbanModule,
    NgSelectModule,
    NgSelectScrollModule,
    MoneyModule,
    NgxSkeletonLoaderModule,
    NgbModule,
    CheckRoleModule,
    B1CardNumberModule,
    B1DaterangepickerModule,
    NgSelectModule,
    NgSelectScrollModule,
    B1InputAmountModule,
    FirstTitleModule,
    CheckValueModule,
    B1ButtonModule,
    B1ModalContainerModule,
    EffectsModule.forFeature([CardDetailsEffects]),
  ],
})
export class CardDetailsModule {}
