import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

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
  ],
  exports: [B1SupDocumentsComponent],
})
export class B1SupDocumentsModule {}
