import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1ModalContainerModule } from '@containers/b1-modal-container/b1-modal-container.module';

import { B1SupDocumentsComponent } from './b1-sup-documents.component';

@NgModule({
  declarations: [B1SupDocumentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    TranslateModule,
    NgScrollbarModule,
    B1IconModule,
    CheckValueModule,
    B1ButtonModule,
    B1InputModule,
    B1ModalContainerModule,
  ],
  exports: [B1SupDocumentsComponent],
})
export class B1SupDocumentsModule {}
