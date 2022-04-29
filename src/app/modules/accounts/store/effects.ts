import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AcctService } from '@modules/accounts/services/acct-service/acct.service';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { FormGroupState, SetValueAction } from 'ngrx-forms';
import { catchError, delay, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { AcctActions } from './actions';
import { AcctSelectors } from './selectors';
import { ACCT_FILTER_FORM } from './store';
import { RequisitesModalConfig } from '@models/modals/requisites-modal-config.model';
import { SharedActions } from '@store/shared/actions';
import { UserSelectors } from '@store/user/selectors';
import { of } from 'rxjs';
import { ExportTurnoverModalConfig } from '@models/modals/export-turnover-modal-config.model';
import { NotifyActions } from '@store/notify/actions';
import { AcctFilter } from '../models/acct-filter.model';

@Injectable()
export class AcctEffects {
  constructor(
    private actions$: Actions,
    private accountsService: AcctService,
    private store: Store,
    private translateService: TranslateService
  ) {}

  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.loadAccounts),
      switchMap(() => clientIdWithoudData(this.store)),
      tap(console.log),
      // waitFor(currentClientIdFilteredSelector(this.store)),
      switchMap((clientId) =>
        this.accountsService.getAccounts(clientId).pipe(map((accounts) => AcctActions.setAccounts({ accounts })))
      )
    )
  );

  setCurrencyFilterOther$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SetValueAction<boolean>>(SetValueAction.TYPE),
      filter((formControl: SetValueAction<boolean>) => formControl.controlId.startsWith(ACCT_FILTER_FORM)),
      withLatestFrom(this.store.select(AcctSelectors.form)),
      filter(
        ([formControl, form]: [SetValueAction<boolean>, FormGroupState<AcctFilter>]) =>
          formControl.controlId === form.controls.currency.controls.OTHER.id && formControl.value === true
      ),
      switchMap(([, form]) => {
        return [
          new SetValueAction(form.controls.currency.controls.EUR.id, false),
          new SetValueAction(form.controls.currency.controls.USD.id, false),
          new SetValueAction(form.controls.currency.controls.UAH.id, false),
        ];
      })
    )
  );

  setCurrencyFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SetValueAction<boolean>>(SetValueAction.TYPE),
      filter((formControl: SetValueAction<boolean>) => formControl.controlId.startsWith(ACCT_FILTER_FORM)),
      withLatestFrom(this.store.select(AcctSelectors.form)),
      filter(
        ([formControl, form]: [SetValueAction<boolean>, FormGroupState<AcctFilter>]) =>
          [
            form.controls.currency.controls.EUR.id,
            form.controls.currency.controls.USD.id,
            form.controls.currency.controls.UAH.id,
          ].indexOf(formControl.controlId) >= 0 && formControl.value === true
      ),
      switchMap(([, form]) => {
        return [new SetValueAction(form.controls.currency.controls.OTHER.id, false)];
      })
    )
  );

  openRequisites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.openRequisitesModal),
      withLatestFrom(this.store.select(UserSelectors.userEmail)),
      map(([action, email]) => {
        const config: RequisitesModalConfig = {
          email,
          formats: action.account.requisitesTypesList,
          callback: (result) => {
            const model = {
              accountId: action.account.id,
              bankId: action.account.bankId,
              format: result.format,
            };
            if (result.sendToEmail) {
              this.store.dispatch(
                AcctActions.sendRequisitesRequest({
                  ...model,
                  email: result.email as string,
                })
              );
            } else {
              this.store.dispatch(AcctActions.downloadRequisitesRequest({ ...model }));
            }
          },
        };
        return SharedActions.showRequisites({ config });
      })
    )
  );

  openExport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.openExportModal),
      withLatestFrom(this.store.select(UserSelectors.userEmail)),
      map(([action, email]) => {
        const config: ExportTurnoverModalConfig = {
          email,
          formats: action.account.exportTypesList,
          start: action.range?.start,
          end: action.range?.end,
          callback: (result) => {
            const model = {
              accountId: action.account.id,
              bankId: action.account.bankId,
              format: result.format,
              start: result.range.start,
              end: result.range.end,
            };
            if (result.sendToEmail) {
              this.store.dispatch(
                AcctActions.sendExportTurnoversRequest({
                  ...model,
                  email: result.email as string,
                })
              );
            } else {
              this.store.dispatch(AcctActions.downloadExportTurnoversRequest({ ...model }));
            }
          },
        };
        return SharedActions.showExportTurnovers({ config });
      })
    )
  );

  downloadRequisitesRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.downloadRequisitesRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.accountsService
          .getRequisites(payload.data.bankId, payload.data.accountId, payload.clientId, payload.data.format)
          .pipe(
            map((file) => AcctActions.downloadRequisitesSuccess(file)),
            catchError((error) =>
              of(
                AcctActions.downloadRequisitesFailure(error.message),
                NotifyActions.serverErrorNotification({
                  error,
                  message: this.translateService.instant('errors.downloadRequisites'),
                })
              )
            )
          )
      )
    )
  );

  downloadRequisitesSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.downloadRequisitesSuccess),
      map((action) => SharedActions.saveFile({ file: action.payload }))
    )
  );

  sendRequisitesRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.sendRequisitesRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.accountsService
          .sendRequisites(
            payload.data.bankId,
            payload.data.accountId,
            payload.clientId,
            payload.data.format,
            payload.data.email
          )
          .pipe(
            map((file) => AcctActions.sendRequisitesSuccess(file)),
            catchError((error) => of(AcctActions.sendRequisitesFailure(error.error.Message)))
          )
      )
    )
  );

  downloadExportTurnovers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.downloadExportTurnoversRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.accountsService
          .getExportTurnovers(
            payload.data.bankId,
            payload.data.accountId,
            payload.clientId,
            payload.data.start,
            payload.data.end,
            payload.data.format
          )
          .pipe(
            map((file) => AcctActions.downloadExportTurnoversSuccess(file)),
            catchError((error) => of(AcctActions.downloadExportTurnoversFailure(error.error.Message)))
          )
      )
    )
  );

  downloadExportTurnoversSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.downloadExportTurnoversSuccess),
      map((action) => SharedActions.saveFile({ file: action.payload }))
    )
  );

  sendExportTurnovers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.sendExportTurnoversRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.accountsService
          .sendExportTurnovers(
            payload.data.bankId,
            payload.data.accountId,
            payload.clientId,
            payload.data.start,
            payload.data.end,
            payload.data.format,
            payload.data.email
          )
          .pipe(
            map((file) => AcctActions.sendExportTurnoversSuccess(file)),
            catchError((error) => of(AcctActions.sendExportTurnoversFailure(error.error.Message)))
          )
      )
    )
  );

  downloadStatement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.downloadStatementRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.accountsService
          .getStatement(
            payload.data.bankId,
            payload.data.accountId,
            payload.clientId,
            payload.data.result.range.start,
            payload.data.result.range.end,
            payload.data.result.format
          )
          .pipe(
            map((file) => AcctActions.downloadStatementSuccess(file)),
            catchError((error) => of(AcctActions.downloadStatementFailure(error.message)))
          )
      )
    )
  );

  downloadStatementSucess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.downloadStatementSuccess),
      map((action) => SharedActions.saveFile({ file: action.payload }))
    )
  );

  sendStatement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.sendStatementRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.accountsService
          .sendStatement(
            payload.data.bankId,
            payload.data.accountId,
            payload.clientId,
            payload.data.result.range.start,
            payload.data.result.range.end,
            payload.data.result.format,
            payload.data.result.email as string
          )
          .pipe(
            map(() => AcctActions.sendStatementSuccess(undefined)),
            catchError((error) => of(AcctActions.sendStatementFailure(error.message)))
          )
      )
    )
  );

  sendStatementSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcctActions.sendStatementSuccess),
      map(() =>
        NotifyActions.successNotification({
          message: 'sucess',
          title: 'success',
        })
      )
    )
  );
  // downloadRequisitesFailure$ = createEffect(()=>
  //     this.actions$.pipe(
  //         ofType(AcctActions.downloadRequisitesFailure),

  //     ))
}
