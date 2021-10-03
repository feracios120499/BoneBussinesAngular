import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1AccountSelectComponent } from './components/b1-account-select/b1-account-select.component';
import { B1SinglePickerComponent } from './components/b1-single-picker/b1-single-picker.component';
import { B1InputAmountComponent } from './components/b1-input-amount/b1-input-amount.component';
import { B1InputErrorComponent } from './components/b1-input-error/b1-input-error.component';
import { DaterangepickerDirective } from './components/b1-daterangepicker/b1-daterangepicker.directive';
import { DaterangepickerComponent } from './components/b1-daterangepicker/b1-daterangepicker.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { B1PipesModule } from '../b1-pipes/b1-pipes.module';
import { B1DirectivesModule } from '../b1-directives/b1-directives.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    B1AccountSelectComponent,
    B1SinglePickerComponent,
    B1InputAmountComponent,
    B1InputErrorComponent,
    DaterangepickerComponent,
    DaterangepickerDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    B1PipesModule,
    B1DirectivesModule,
    NgxSkeletonLoaderModule,
    NgSelectModule
  ],
  exports: [
    B1AccountSelectComponent,
    B1SinglePickerComponent,
    B1InputAmountComponent,
    B1InputErrorComponent,
    DaterangepickerComponent,
    DaterangepickerDirective
  ]
})
export class B1FormsModule { }
