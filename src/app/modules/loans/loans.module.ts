import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansHeaderModule } from './components/loans-header/loans-header.module';

import { LoansComponent } from './loans.component';

import { LoansEffects } from './store/effects';

@NgModule({
  declarations: [LoansComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    TranslateModule,
    LoansHeaderModule,
    LoansRoutingModule,
    EffectsModule.forFeature([LoansEffects]),
  ],
})
export class LoansModule {}
