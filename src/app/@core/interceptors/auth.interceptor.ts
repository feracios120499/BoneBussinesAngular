import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@services/auth.service';
import { AuthActions } from '@store/auth/actions';
import { AuthSelectors } from '@store/auth/selectors';
import { EMPTY, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Token } from './../../modules/auth/models/token.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  endpoint = 'http://obbbmw01.unity-bars.com/Bars.API.Web.Client/';
  token: Token | undefined = undefined;

  constructor(private translate: TranslateService, private store: Store, private authService: AuthService) {
    store.select(AuthSelectors.token).subscribe(token => {
      this.token = token;
    });
  }

  refreshTokenInProgress = false;

  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  refreshToken(): any {
    if (this.refreshTokenInProgress) {
      return new Observable(observer => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshTokenInProgress = true;

      return this.authService.refreshToken(this.token?.refresh_token, this.token?.sessionId).pipe(
        tap((token) => {
          this.store.dispatch(AuthActions.setToken({ token }));
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next();
        }),
        catchError(() => {
          this.refreshTokenInProgress = false;
          this.logout();
          return EMPTY;
        }));
    }
  }

  handleResponseError(error: any, request: HttpRequest<any>, next: HttpHandler): any {

    // Invalid token error
    if (error.status === 401) {
      return this.refreshToken().pipe(
        switchMap(() => {
          request = this.formatRequest(request);
          return next.handle(request);
        }),
        catchError(e => {
          if (e.status !== 401) {
            return this.handleResponseError(e, request, next);
          } else {
            this.logout();
            return EMPTY;
          }
        }));
    }

    // Access denied error
    else if (error.status === 403) {
      // Show message
      // Logout
      this.logout();
    }

    // Server error
    else if (error.status === 500) {
      // Show message
    }

    // Maintenance error
    else if (error.status === 503) {
      // Show message
      // Redirect to the maintenance page
    }

    return throwError(error);
  }

  logout(): any {
    this.store.dispatch(AuthActions.logout());
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const requestFormated = this.formatRequest(req);
    return next.handle(requestFormated)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(error => this.handleResponseError(error, req, next))
      );
  }

  formatRequest(request: HttpRequest<any>): HttpRequest<any> {
    const language = this.translate.currentLang === 'uk' ? 'uk-UA' : this.translate.currentLang === 'ru' ? 'ru-RU' : 'en-US';
    const prefix = request.url.indexOf('?') > 0 ? '&_=' : '?_=';
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

    if (this.token && !request.url.includes('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.token.access_token
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
