import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ModalService } from '@services/modal.service';
import { B1ErrorModalComponent } from '@modals/b1-error-modal/b1-error-modal.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomToast } from '@ui/custom-toast/custom-toast.component';

import { NotifyActions } from './actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class NotifyEffects {
  constructor(
    private actions$: Actions,
    private toastrService: ToastrService,
    private modalService: ModalService,
    private translateService: TranslateService
  ) {}

  config: Partial<IndividualConfig> = {
    positionClass: 'toast-top-right',
  };

  mobileConfig: Partial<IndividualConfig> = {
    positionClass: 'toast-bottom-center',
  };

  showSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NotifyActions.successNotification),
        tap((action) => this.toastrService.success(action.message, action.title, this.getConfig()))
      ),
    { dispatch: false }
  );

  showWarning$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NotifyActions.warningNotification),
        tap((action) => this.toastrService.warning(action.message, action.title, this.getConfig()))
      ),
    { dispatch: false }
  );

  showError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NotifyActions.errorNotification),
        tap((action) => this.toastrService.error(action.message, action.title, this.getConfig()))
      ),
    { dispatch: false }
  );

  showServerError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NotifyActions.serverErrorNotification),
        tap((action) => {
          if (action.error.isFatal) {
            const toast = this.toastrService.error(action.message, action.title, {
              ...this.getConfig(),
              toastComponent: CustomToast,
            });
            toast.toastRef.componentInstance.showDetailsCallback = () => {
              const modal = this.modalService.open(B1ErrorModalComponent);
              modal.componentInstance.error = action.error;
            };
          } else {
            this.toastrService.error(action.error.message, action.title, this.getConfig());
          }
        })
      ),
    { dispatch: false }
  );

  showArrayNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NotifyActions.arrayNotification),
        tap((action) => {
          const errors = action.results.filter((p) => !p.isSuccess);
          const countSuccess = action.results.filter((p) => p.isSuccess).length;
          const countErrors = errors.length;
          const hasErrors = countErrors !== 0;

          let message = `<div>${this.translateService.instant(
            'components.pay.successfullyProcessed'
          )}: <b>${countSuccess}</b></div>`;

          if (hasErrors) {
            message += `<div>${this.translateService.instant(
              'components.pay.processedWithErrors'
            )}: <b>${countErrors}</b></div>`;
            errors.forEach((item) => (message += `<li>${item.number}: <b>${item.message}</b></li>`));

            this.toastrService.error(message, this.translateService.instant('errors.error'), {
              ...this.getConfig(),
              enableHtml: true,
            });
          } else {
            this.toastrService.success(message, this.translateService.instant('shared.success'), {
              ...this.getConfig(),
              enableHtml: true,
            });
          }
        })
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
