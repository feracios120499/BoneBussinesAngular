import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';
import { B1IconDirective } from './directives/b1-icon.directive';

import { CheckStateDirective } from './directives/check-state.directive';
import { B1CardLoaderComponent } from './components/b1-card-loader/b1-card-loader.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ConnectFormDirective } from './directives/connect-form.directive';




@NgModule({
  declarations: [CheckStateDirective, B1IconDirective, B1CardLoaderComponent, ConnectFormDirective],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    NgOtpInputModule,
    ReactiveComponentModule,
    ScrollingModule,
    NgScrollbarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbModule,
    CheckStateDirective,
    NgOtpInputModule,
    B1IconDirective,
    B1CardLoaderComponent,
    ScrollingModule,
    NgScrollbarModule,
    ConnectFormDirective
  ]
})
export class SharedModule { }
