import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { tokenSelector } from '@selectors/auth.selectors';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Token } from './../../modules/auth/models/token.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  endpoint = 'http://localhost/Bars.API.Web.Client/';
  token: Token | undefined = undefined;

  constructor(private translate: TranslateService, private store: Store) {
    store.select(tokenSelector).subscribe(token => {
      this.token = token;
    });
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestFormated = this.formatRequest(req);
    return next.handle(requestFormated)
      .pipe(
        map((data: any) => {
          return data;
        }),
        tap((event: HttpEvent<any>) => {

        },
          (err: any) => {
            return throwError(err);
          })
      );
  }

  formatRequest(request: HttpRequest<any>): HttpRequest<any> {
    const language = this.translate.currentLang === 'uk' ? 'uk-UA' : this.translate.currentLang === 'ru' ? 'ru-RU' : 'en-US';
    const prefix = request.url.indexOf('?') > 0 ? '&_=' : '?_=';
    console.log(this.translate.currentLang);
    if (!request.url.includes('token')) {
      request = request.clone({
        setHeaders: {
          'Use-Response-Wrapper': request.url.includes('token') ? 'true' : 'false'
        }
      });
    }

    if (this.isStaticFileRequest(request.url)) {
      request = request.clone({
        url: request.url + prefix + this.customDate(new Date(), '.')
      });

      return request;

    }
    request = request.clone({
      url: this.endpoint + request.url,
      setHeaders: {
        'Accept-Language': language
      },

    });

    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer' + this.token.access_token
        }
      });
    }
    return request;
  }

  isStaticFileRequest(url: string): boolean {
    return url.indexOf('i18n') >= 0 || url.indexOf('.svg') >= 0;
  }

  customDate(date: Date, separator: string): string {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();
    return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear(),
    ].join(separator);
  }
}
