import { Injectable } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResizeService {

    resizeObservable$: Observable<Event>;
    isMobile$: Observable<boolean> = of(false);

    constructor() {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.isMobile$ = this.resizeObservable$.pipe(
            startWith(window.innerWidth <= environment.mobileWidth),
            map(() => window.innerWidth <= environment.mobileWidth)
        );
    }


}
