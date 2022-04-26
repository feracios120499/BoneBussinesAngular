import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PayFormsEffects } from '@store/payments/forms/effects';
import { payFormsReducer } from '@store/payments/forms/reducer';
import { PAY_FORMS_KEY } from '@store/payments/forms/store';
import { SupDocumentsEffects } from '@store/sup-documents/effects';
import { supDocReducer } from '@store/sup-documents/reducer';
import { SUP_DOC_KEY } from '@store/sup-documents/store';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { CreateRoutingModule } from './create-routing.module';

import { CreateComponent } from './create.component';
import { CreateTabsComponent } from './components/create-tabs/create-tabs.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CreateComponent, CreateTabsComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormsModule,
    TranslateModule,
    CreateRoutingModule,
    B1IconModule,
    StoreModule.forFeature(PAY_FORMS_KEY, payFormsReducer),
    StoreModule.forFeature(SUP_DOC_KEY, supDocReducer),
    EffectsModule.forFeature([PayFormsEffects, SupDocumentsEffects]),
  ],
})
export class CreateModule {}
