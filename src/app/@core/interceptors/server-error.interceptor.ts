import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { ServerError } from '@models/errors/server-error.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ServerErrorInteceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        const serverError = new ServerError(
          error.status,
          error.error.Message ||
            error.error.ExceptionMessage ||
            error.error.ErrorMessage ||
            error.error.error_description
        );

        serverError.url = error.url;
        serverError.requestId = error.headers.get('Bars_RequestId');
        serverError.sessionId = error.headers.get('Bars_SessionId');

        throw serverError;
      })
    );
  }
}
