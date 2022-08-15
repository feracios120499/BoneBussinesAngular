import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CheckValueModule } from '@directives/check-value/check-value.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1InputComponent } from './b1-input.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [B1InputComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    CheckValueModule,
    B1IconModule,
    ReactiveComponentModule,
    NgScrollbarModule,
  ],
  exports: [B1InputComponent],
})
export class B1InputModule {}
