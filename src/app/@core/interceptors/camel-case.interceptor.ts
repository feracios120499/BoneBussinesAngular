import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { camelCase, isPlainObject } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class CamelCaseInterceptor implements HttpInterceptor {
    camelizeKeys(obj: any): any {
        if (Array.isArray(obj)) {
            return obj.map(v => this.camelizeKeys(v));
        } else if (isPlainObject(obj)) {
            return Object.keys(obj).reduce(
                (result, key) => ({
                    ...result,
                    [camelCase(key)]: this.camelizeKeys(obj[key]),
                }),
                {},
            );
        }
        return obj;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (!event.url?.includes('.json')) {
                        const camelCaseObject = this.camelizeKeys(event.body);

                        if (camelCaseObject.timestamp && camelCaseObject.result) {
                            const modEvent = event.clone({ body: camelCaseObject.result }) as any;
                            return modEvent;
                        } else {
                            const modEvent = event.clone({ body: camelCaseObject }) as any;
                            return modEvent;
                        }
                    }
                }
                return event;
            })
        );
    }
}
