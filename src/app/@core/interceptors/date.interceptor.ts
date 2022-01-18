import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AngularDateHttpInterceptor implements HttpInterceptor {
    // Migrated from AngularJS https://raw.githubusercontent.com/Ins87/angular-date-interceptor/master/src/angular-date-interceptor.js
    iso8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!(req.body instanceof FormData) && !(req.body instanceof HttpParams)) {
            req = req.clone({
                body: this.normalizeDate(req.body)
            });
        }
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const body = event.body;
                    this.convertToDate(body);
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                    }
                }
            }),
        );
    }


    normalizeDate(body: any): any {
        if (body === null || body === undefined) {
            return body;
        }


        if (typeof body !== 'object') {
            return body;
        }

        if (Array.isArray(body)) {
            return body;
        }

        const newBody = { ...body };

        for (const key of Object.keys(newBody)) {
            const value = newBody[key];
            if (value instanceof Date) {
                newBody[key] = new Date(
                    Date.UTC(
                        value.getFullYear(),
                        value.getMonth(),
                        value.getDate(),
                        value.getHours(),
                        value.getMinutes(),
                        value.getSeconds()));
            } else if (typeof value === 'object') {
                this.normalizeDate(value);
            }
        }
        return newBody;
    }

    convertToDate(body: any): any {
        if (body === null || body === undefined) {
            return body;
        }

        if (typeof body !== 'object') {
            return body;
        }

        for (const key of Object.keys(body)) {
            const value = body[key];
            if (this.isIso8601(value)) {
                body[key] = new Date(value);
            } else if (typeof value === 'object') {
                this.convertToDate(value);
            }
        }
    }

    isIso8601(value: any): boolean {
        if (value === null || value === undefined) {
            return false;
        }

        return this.iso8601.test(value);
    }
}
