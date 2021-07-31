import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as notifyActions from '../actions/notify.actions';


@Injectable()
export class NotifyEffects {
    constructor(private actions$: Actions, private toastrService: ToastrService) { }
    config: Partial<IndividualConfig> = {
        positionClass: 'toast-top-right'
    };
    mobileConfig: Partial<IndividualConfig> = {
        positionClass: 'toast-bottom-center'
    };
    showSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(notifyActions.successNotification),
            tap((action) => this.toastrService.success(action.message, action.title, this.getConfig()))
        ),
        { dispatch: false }
    );

    getConfig(): Partial<IndividualConfig> {
        if (window.screen.width <= environment.mobileWidth) {
            return this.mobileConfig;
        }
        return this.config;
    }
}
