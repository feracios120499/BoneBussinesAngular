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

@NgModule({
  declarations: [
    SupdocumentComponent,
    SupdocumentHeaderComponent,
    SupdocumentCardComponent,
    SupdocumentDetailsComponent,
  ],
  imports: [
    CommonModule,
    SupdocumentRoutingModule,
    TranslateModule,
    B1DropdownModule,
    B1MoreButtonModule,
    NgxSkeletonLoaderModule,
    ReactiveComponentModule,
    B1IconModule,
    EffectsModule.forFeature([SupDocumentDetailsEffects]),
  ],
})
export class SupdocumentModule {}
