import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { B1DirectivesModule } from '../b1-directives/b1-directives.module';
import { B1PipesModule } from '../b1-pipes/b1-pipes.module';
import { B1AccountSelectComponent } from './components/b1-account-select/b1-account-select.component';
import { DaterangepickerComponent } from './components/b1-daterangepicker/b1-daterangepicker.component';
import { DaterangepickerDirective } from './components/b1-daterangepicker/b1-daterangepicker.directive';
import { B1InputAmountComponent } from './components/b1-input-amount/b1-input-amount.component';
import { B1InputErrorComponent } from './components/b1-input-error/b1-input-error.component';
import { B1SinglePickerComponent } from './components/b1-single-picker/b1-single-picker.component';
import { B1SupDocumentsComponent } from './components/b1-sup-documents/b1-sup-documents.component';
import { B1ListDocumentsComponent } from './components/b1-list-documents/b1-list-documents.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    B1AccountSelectComponent,
    B1SinglePickerComponent,
    B1InputAmountComponent,
    B1InputErrorComponent,
    DaterangepickerComponent,
    DaterangepickerDirective,
    B1SupDocumentsComponent,
    B1ListDocumentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    B1PipesModule,
    B1DirectivesModule,
    NgxSkeletonLoaderModule,
    NgSelectModule,
    ReactiveComponentModule,
    ScrollingModule,
    NgScrollbarModule,
    NgbTooltipModule,
  ],
  exports: [
    B1AccountSelectComponent,
    B1SinglePickerComponent,
    B1InputAmountComponent,
    B1InputErrorComponent,
    DaterangepickerComponent,
    DaterangepickerDirective,
    B1SupDocumentsComponent,
    B1ListDocumentsComponent,
  ],
})
export class B1FormsModule {}
