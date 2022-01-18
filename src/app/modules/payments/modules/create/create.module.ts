import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PayFormsEffects } from '@store/payments/forms/effects';
import { payFormsReducer } from '@store/payments/forms/reducer';
import { PAY_FORMS_KEY } from '@store/payments/forms/store';
import { SupDocumentsEffects } from '@store/sup-documents/effects';
import { supDocReducer } from '@store/sup-documents/reducer';
import { SUP_DOC_KEY } from '@store/sup-documents/store';
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';
import { SharedModule } from 'src/app/@shared/shared.module';

import { CreateTabsComponent } from './components/create-tabs/create-tabs.component';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';


@NgModule({
  declarations: [
    CreateComponent,
    CreateTabsComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    B1DirectivesModule,
    StoreModule.forFeature(PAY_FORMS_KEY, payFormsReducer),
    StoreModule.forFeature(SUP_DOC_KEY, supDocReducer),
    EffectsModule.forFeature([
      PayFormsEffects,
      SupDocumentsEffects
    ])
  ]
})
export class CreateModule { }
