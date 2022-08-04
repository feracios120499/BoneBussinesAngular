import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupdocumentsComponent } from './supdocuments.component';
import { SupdocumentsListComponent } from './components/supdocuments-list/supdocuments-list.component';
import { RouterModule } from '@angular/router';
import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { SupdocumentsHeaderComponent } from './components/supdocuments-header/supdocuments-header.component';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1NumberInputModule } from '@form-controls/b1-number-input/b1-number-input.module';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { SupdocumentsActionsComponent } from './components/supdocuments-actions/supdocuments-actions.component';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';

import { ReactiveComponentModule } from '@ngrx/component';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { SupdocumentItemComponent } from './components/supdocument-item/supdocument-item.component';
import { B1MoreButtonModule } from '@ui/b1-more-button/b1-more-button.module';


@NgModule({
  declarations: [
    SupdocumentsComponent,
    SupdocumentsListComponent,
    SupdocumentsHeaderComponent,
    SupdocumentsActionsComponent,
    SupdocumentItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    B1ContentWrapperModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    B1NumberInputModule,
    B1EmptyModule,
    B1IconModule,
    B1ButtonModule,
    B1PageSeparatorModule,
    B1CardLoaderModule,
    B1MoreButtonModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: SupdocumentsComponent,
      },
    ]),
  ]
})
export class SupdocumentsModule { }
