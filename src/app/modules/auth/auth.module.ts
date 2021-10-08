import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
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
import { B1DirectivesModule } from 'src/app/@shared/modules/b1-directives/b1-directives.module';


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
    AuthCryptorComponent
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule, B1DirectivesModule],
  exports: [],
})
export class AuthModule { }
