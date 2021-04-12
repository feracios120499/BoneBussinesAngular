import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';

import { CheckStateDirective } from './directives/check-state.directive';

@NgModule({
  declarations: [CheckStateDirective],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    NgOtpInputModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    CheckStateDirective,
    NgOtpInputModule
  ]
})
export class SharedModule { }
