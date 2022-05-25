import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';

import { B1InputModule } from '@form-controls/b1-input/b1-input.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { SharedModule } from '@shared';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { B1EmptyModule } from '@containers/b1-empty/b1-empty.module';

import { OverdraftsComponent } from './overdrafts.component';
import { OverdraftsListComponent } from './components/overdrafts-list/overdrafts-list.component';
import { OverdraftItemComponent } from './components/overdraft-item/overdraft-item.component';
import { OverdraftsActionsComponent } from './components/overdrafts-actions/overdrafts-actions.component';

import { OverdraftsEffects } from './store/effects';
import { OverdraftsFilterPipe } from './pipes/overdrafts-filter.pipe';

@NgModule({
  declarations: [
    OverdraftsComponent,
    OverdraftsListComponent,
    OverdraftItemComponent,
    OverdraftsActionsComponent,
    OverdraftsFilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    TranslateModule,
    B1InputModule,
    B1CardLoaderModule,
    SharedModule,
    NgScrollbarModule,
    B1EmptyModule,
    EffectsModule.forFeature([OverdraftsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: OverdraftsComponent,
      },
    ]),
  ],
})
export class OverdraftsModule {}
