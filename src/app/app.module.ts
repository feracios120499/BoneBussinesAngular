import { CommonModule, DatePipe } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReissueApplicationsModule } from '@modules/cards/modules/reissue-applications/reissue-applications.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';
import { WebClassModule } from '@directives/web-class/web-class.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { SharedModule } from './@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { ModalsModule } from '@modals/mobals.module';
import { B1PageLoaderModule } from '@ui/b1-page-loader/b1-page-loader.module';
import { B1LinkModule } from '@ui/b1-link/b1-link.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorizedLayoutComponent } from './layout/authorized-layout/authorized-layout.component';
import { HeaderDarkModeComponent } from './layout/header/components/header-dark-mode/header-dark-mode.component';
import { HeaderLanguagesComponent } from './layout/header/components/header-languages/header-languages.component';
import { HeaderNotificationsComponent } from './layout/header/components/header-notifications/header-notifications.component';
import { HeaderProfileComponent } from './layout/header/components/header-profile/header-profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
import { CamelCaseInterceptor } from '@core/interceptors/camel-case.interceptor';
import { AngularDateHttpInterceptor } from '@core/interceptors/date.interceptor';
import { ServerErrorInteceptor } from '@core/interceptors/server-error.interceptor';
import { B1GlobalLoaderModule } from '@ui/b1-global-loader/b1-global-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizedLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderDarkModeComponent,
    HeaderNotificationsComponent,
    HeaderLanguagesComponent,
    HeaderProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveComponentModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    ModalsModule,
    MobileClassModule,
    WebClassModule,
    B1IconModule,
    B1LinkModule,
    B1PageLoaderModule,
    B1GlobalLoaderModule,
    ReactiveComponentModule,
    ReissueApplicationsModule,
  ],
  exports: [ReactiveComponentModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AngularDateHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CamelCaseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInteceptor,
      multi: true,
    },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
