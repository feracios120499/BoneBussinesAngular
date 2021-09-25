import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CoreModule } from './@core/core.module';
import { AuthInterceptor } from './@core/interceptors/auth.interceptor';
import { B1GlobalLoaderComponent } from './@shared/components/b1-global-loader/b1-global-loader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizedLayoutComponent } from './layout/authorized-layout/authorized-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SharedModule } from './@shared/shared.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgrxFormsModule } from 'ngrx-forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderDarkModeComponent } from './layout/header/components/header-dark-mode/header-dark-mode.component';
import { HeaderNotificationsComponent } from './layout/header/components/header-notifications/header-notifications.component';
import { HeaderLanguagesComponent } from './layout/header/components/header-languages/header-languages.component';
import { HeaderProfileComponent } from './layout/header/components/header-profile/header-profile.component';
import { DaterangepickerDirective } from './@shared/components/b1-daterangepicker/b1-daterangepicker.directive';
import { AngularDateHttpInterceptor } from '@core/interceptors/date.interceptor';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    B1GlobalLoaderComponent,
    AuthorizedLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderDarkModeComponent,
    HeaderNotificationsComponent,
    HeaderLanguagesComponent,
    HeaderProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveComponentModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    ReactiveComponentModule
  ],
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
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
