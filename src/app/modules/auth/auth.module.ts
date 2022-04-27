import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOtpInputModule } from 'ng-otp-input';

import { CheckStateModule } from '@directives/check-state/check-state.module';
import { NgSelectScrollModule } from '@directives/ng-select-scroll/ng-select-scroll.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CheckValueModule } from '@directives/check-value/check-value.module';

import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthCloudComponent } from './components/auth-cloud/auth-cloud.component';
import { AuthErrorComponent } from './components/auth-error/auth-error.component';
import { AuthKeyComponent } from './components/auth-key/auth-key.component';
import { AuthLanguagesComponent } from './components/auth-languages/auth-languages.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthOtpComponent } from './components/auth-otp/auth-otp.component';
import { AuthPhoneComponent } from './components/auth-phone/auth-phone.component';
import { AuthLogonOldComponent } from './views/auth-logon-old/auth-logon-old.component';
import { AuthLogonComponent } from './views/auth-logon/auth-logon.component';
import { AuthComponent } from './views/auth/auth.component';
import { AuthCryptorComponent } from './components/auth-cryptor/auth-cryptor.component';
import { AuthInputComponent } from './components/auth-input/auth-input.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthLanguagesComponent,
    AuthLogonComponent,
    AuthLogonOldComponent,
    AuthLoginComponent,
    AuthCloudComponent,
    AuthPhoneComponent,
    AuthKeyComponent,
    AuthButtonComponent,
    AuthErrorComponent,
    AuthOtpComponent,
    AuthCryptorComponent,
    AuthInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NgbModule,
    AuthRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgSelectScrollModule,
    CheckStateModule,
    NgOtpInputModule,
    CheckValueModule,
  ],
  exports: [],
})
export class AuthModule {}
