import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { NotifyActions } from '@store/notify/actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { LoansActions } from './actions';
import { LoansSelectors } from './selectors';
import { LoansService } from '../services/loans-service/loans.service';
import { Loan } from '../models/loan.model';
import { LoanSchedule } from '../models/loan-schedule.model';
import { ServerError } from '@models/errors/server-error.model';
import { RouteActions } from '@store/route/actions';
import { SharedActions } from '@store/shared/actions';
import { PaymentAccount } from '@models/payment-account.model';
import { PaymentForm } from '@models/payment-form.model';

@Injectable()
export class LoansEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private loansService: LoansService,
    private translateService: TranslateService
  ) {}

  loadLoans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoansActions.loadLoansRequest),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId: string) =>
        this.loansService.getLoans(clientId).pipe(
          map((loans: Loan[]) => LoansActions.loadLoansSuccess(loans)),
          catchError((error: ServerError) =>
            of(
              LoansActions.loadLoansFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.loans.errors.loadLoans'),
              })
            )
          )
        )
      )
    )
  );

  loadLoanSchedules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoansActions.loadLoanSchedulesRequest),
      withLatestFrom(this.store.select(LoansSelectors.loanScheduleRouteParams)),
      switchMap(([, routeParams]) => clientIdWithData(this.store, routeParams)),
      switchMap(({ clientId, data: { bankId, loanId } }) =>
        this.loansService.getLoanSchedules(clientId, bankId, loanId).pipe(
          map((loanSchedules: LoanSchedule[]) => LoansActions.loadLoanSchedulesSuccess(loanSchedules)),
          catchError((error: ServerError) =>
            of(
              LoansActions.loadLoanSchedulesFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.loans.errors.loadLoanSchedules'),
              })
            )
          )
        )
      )
    )
  );

  makeLoanPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoansActions.makeLoanPayment),
      switchMap(({ loan }) => {
        const payment: Partial<PaymentForm> = this.mapToPayment(loan);
        return [
          SharedActions.setCreatePartialPayment({ payment }),
          RouteActions.routeTo({ route: '/payments/create/within-country' }),
        ];
      })
    )
  );

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(LoansActions.init),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(LoansActions.destroy)))))
    );
  }

  private mapToPayment(loan: Loan): Partial<PaymentForm> {
    const recipient = {
      taxCode: loan.repaymentAccount.taxCode,
      name: loan.repaymentAccount.name,
      accNumber: loan.repaymentAccount.accNumber,
    };
    return {
      amount: loan.minRepay,
      purpose: loan.repaymentDefaultPurpose,
      recipient: recipient as PaymentAccount,
    };
  }
}
