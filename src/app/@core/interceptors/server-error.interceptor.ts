import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { ServerError } from '@models/errors/server-error.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ServerErrorInteceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          error.error instanceof Blob &&
          error.error.type === 'application/json'
        ) {
          // https://github.com/angular/angular/issues/19888
          // When request of type Blob, the error is also in Blob instead of object of the json data
          return new Promise<any>((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = (e: Event) => {
              try {
                const errmsg = JSON.parse((<any>e.target).result);
                const serverError = new ServerError(
                  error.status,
                  errmsg.Message || errmsg.ExceptionMessage || errmsg.ErrorMessage || errmsg.error_description
                );

                serverError.url = error.url || undefined;
                serverError.requestId = error.headers.get('Bars_RequestId') || undefined;
                serverError.sessionId = error.headers.get('Bars_SessionId') || undefined;

                reject(serverError);
              } catch (e) {
                reject(error);
              }
            };
            reader.onerror = (e) => {
              reject(error);
            };
            reader.readAsText(error.error);
          });
        }
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
