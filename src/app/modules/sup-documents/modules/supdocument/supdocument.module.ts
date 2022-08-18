import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupdocumentRoutingModule } from './supdocument-routing.module';
import { SupdocumentComponent } from './supdocument.component';
import { SupdocumentHeaderComponent } from './components/supdocument-header/supdocument-header.component';
import { SupdocumentCardComponent } from './components/supdocument-card/supdocument-card.component';
import { SupdocumentDetailsComponent } from './components/supdocument-details/supdocument-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveComponentModule } from '@ngrx/component';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { EffectsModule } from '@ngrx/effects';
import { SupDocumentDetailsEffects } from './store/effects';
import { SupdocumentPaymentsListComponent } from './components/supdocument-payments-list/supdocument-payments-list.component';
import { SupdocumentPaymentsComponent } from './components/supdocument-payments/supdocument-payments.component';
import { SupdocumentPaymentsHeaderComponent } from './components/supdocument-payments-header/supdocument-payments-header.component';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { SupdocumentEditModalComponent } from './components/supdocument-edit-modal/supdocument-edit-modal.component';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1TextareaModule } from '@form-controls/b1-textarea/b1-textarea.module';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    SupdocumentComponent,
    SupdocumentHeaderComponent,
    SupdocumentCardComponent,
    SupdocumentDetailsComponent,
    SupdocumentPaymentsHeaderComponent,
    SupdocumentPaymentsListComponent,
    SupdocumentPaymentsComponent,
    SupdocumentEditModalComponent,
  ],
  imports: [
    CommonModule,
    SupdocumentRoutingModule,
    TranslateModule,
    B1DropdownModule,
    B1MoreButtonModule,
    NgxSkeletonLoaderModule,
    NgrxFormsModule,
    ReactiveComponentModule,
    B1IconModule,
    B1CardLoaderModule,
    B1InputModule,
    B1ModalContainerModule,
    B1ButtonModule,
    B1TextareaModule,
    EffectsModule.forFeature([SupDocumentDetailsEffects]),
  ],
})
export class SupdocumentModule {}
