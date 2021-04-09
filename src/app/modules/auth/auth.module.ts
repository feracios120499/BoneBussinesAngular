import { CoreModule } from './../../@core/core.module';
import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './views/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { AuthLanguagesComponent } from './components/auth-languages/auth-languages.component';
import { AuthLogonComponent } from './views/auth-logon/auth-logon.component';
import { AuthLogonOldComponent } from './views/auth-logon-old/auth-logon-old.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthCloudComponent } from './components/auth-cloud/auth-cloud.component';
import { AuthPhoneComponent } from './components/auth-phone/auth-phone.component';
import { AuthKeyComponent } from './components/auth-key/auth-key.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthErrorComponent } from './components/auth-error/auth-error.component';
import { AuthOtpComponent } from './components/auth-otp/auth-otp.component';


@NgModule({
    declarations: [
        AuthComponent,
        AuthInputComponent,
        AuthLanguagesComponent,
        AuthLogonComponent,
        AuthLogonOldComponent,
        AuthLoginComponent,
        AuthCloudComponent,
        AuthPhoneComponent,
        AuthKeyComponent,
        AuthButtonComponent,
        AuthErrorComponent,
        AuthOtpComponent
    ],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
    exports: [],
})
export class AuthModule { }
