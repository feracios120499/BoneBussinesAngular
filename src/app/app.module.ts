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
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './layout/header/header.component';
import { SharedModule } from './@shared/shared.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgrxFormsModule } from 'ngrx-forms';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    B1GlobalLoaderComponent,
    AuthorizedLayoutComponent,
    HeaderComponent,
    SidebarComponent
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
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
