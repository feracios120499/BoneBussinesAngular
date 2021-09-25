import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { NotifyActions } from './actions';



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
            ofType(NotifyActions.successNotification),
            tap((action) => this.toastrService.success(action.message, action.title, this.getConfig()))
        ),
        { dispatch: false }
    );

    showError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(NotifyActions.errorNotification),
            tap((action) => this.toastrService.error(action.message, action.title, this.getConfig()))
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
