import { Injectable } from '@angular/core';
import { PaginationHelper } from '@helpers/pagination.helper';
import { b64toBlob } from '@methods/base64-to-blob.method';
import { B1EditPaymentModalComponent } from '@modals/b1-edit-payment-modal/b1-edit-payment-modal.component';
import { B1PaymentModalComponent } from '@modals/b1-payment-modal/b1-payment-modal.component';
import { ArrayNotification } from '@models/array-notification.model';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentActionModal, PaymentModal } from '@models/payment-modal.model';
import { CreatePaymentModel } from '@models/payments/create-payment.model';
import { StatusResponse } from '@models/status-response.model';
import { SwiftModal } from '@models/swift-modal.model';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { SwiftDetails } from '@modules/payments/models/swift-details.model';
import { HttpPaymentsService } from '@modules/payments/services/payments-service/http-payments.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ModalService } from '@services/modal.service';
import { NotifyActions } from '@store/notify/actions';
import { RouteActions } from '@store/route/actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { PaymentsImportModalComponent } from '../../payments-list/components/payments-import-modal/payments-import-modal.component';
import { PayImportCommonActions } from './actions';
import { PayImportCommonSelectors } from './selectors';

@Injectable()
export class PayImportCommonEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private modalService: ModalService,
    private paymentsService: HttpPaymentsService
  ) {}

  showPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayImportCommonActions.showPayment),
      map((actions) => {
        return SharedActions.showPayment({ payment: this.mapPayment(actions.payment, actions.payments) });
      })
    )
  );

  editPayment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PayImportCommonActions.editPayment),
        tap((action) => {
          const payment = action.payment.model as PaymentDetails;
          const paymentForm: PaymentForm = {
            paymentDate: payment.paymentDate,
            paymentValueDate: payment.paymentValueDate,
            amount: payment.amount,
            additionalDetails: payment.additionalDetails,
            purpose: payment.purpose,
            sender: {
              accCurrencyCode: payment.sender.accCurrencyCode,
              accNumber: payment.sender.accNumber,
              accCurrencyId: payment.sender.accCurrencyId,
              accId: payment.sender.accId,
              taxCode: payment.sender.taxCode,
              bankCode: payment.sender.bankCode,
              name: payment.sender.name,
            },
            recipient: {
              accCurrencyCode: payment.recipient.accCurrencyCode,
              accNumber: payment.recipient.accNumber,
              accCurrencyId: payment.recipient.accCurrencyId,
              accId: payment.recipient.accId,
              taxCode: payment.recipient.taxCode,
              bankCode: payment.recipient.bankCode,
              name: payment.recipient.name,
            },
            number: payment.number,
          };
          const modal = this.modalService.open(B1EditPaymentModalComponent, { windowClass: 'edit-payment-modal' });
          modal.componentInstance.payment = paymentForm;
          modal.componentInstance.onSave = (payment: PaymentForm) => {
            const paymentSave: PaymentDetails = {
              number: payment.number!,
              amount: payment.amount,
              additionalDetails: payment.additionalDetails,
              sender: {
                accCurrencyCode: payment.sender.accCurrencyCode,
                accNumber: payment.sender.accNumber,
                accCurrencyId: payment.sender.accCurrencyId,
                accId: payment.sender.accId,
                taxCode: payment.sender.taxCode,
                bankCode: payment.sender.bankCode,
                name: payment.sender.name,
              },
              recipient: {
                accCurrencyCode: payment.recipient.accCurrencyCode,
                accNumber: payment.recipient.accNumber,
                accCurrencyId: payment.recipient.accCurrencyId,
                accId: payment.recipient.accId,
                taxCode: payment.recipient.taxCode,
                bankCode: payment.recipient.bankCode,
                name: payment.recipient.name,
              },
              attachedSupDocs: [],
              isNeedMySign: false,
              isNeedSign: false,
              id: action.payment.model.id,
              paymentDate: payment.paymentDate,
              paymentValueDate: payment.paymentValueDate,
              purpose: payment.purpose,
            };

            this.store.dispatch(
              PayImportCommonActions.saveEditPayment({
                payment: { model: paymentSave, status: 'OK' },
              })
            );
            this.modalService.close(B1PaymentModalComponent);
          };
        })
      ),
    { dispatch: false }
  );

  saveResultFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayImportCommonActions.saveResultFile),
      withLatestFrom(this.store.select(PayImportCommonSelectors.resultFile)),
      map(([, payload]) =>
        SharedActions.saveFile({
          file: {
            blob: b64toBlob(payload, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
            name: 'import-result.xlsx',
          },
        })
      )
    )
  );

  savePayments$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PayImportCommonActions.savePayments),
        withLatestFrom(this.store.select(PayImportCommonSelectors.allPayments)),
        tap(([, payments]) => {
          if (!payments) {
            return;
          }
          const dublicatesExist = payments.filter((p) => p.status === 'EXISTS').length > 0;
          if (!dublicatesExist) {
            const successPayments = payments.filter((p) => p.status === 'OK');
            this.store.dispatch(
              PayImportCommonActions.savePaymentsRequest(
                this.isSwift(payments[0])
                  ? successPayments.map((p) => p.model as SwiftDetails)
                  : successPayments.map((p) => p.model as PaymentDetails)
              )
            );
          }
        })
      ),
    { dispatch: false }
  );

  savePaymentsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayImportCommonActions.savePaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) => {
        const method =
          'benificiary' in payload.data[0]
            ? this.paymentsService.createSwiftPayments(
                payload.data.map((payment) => ({
                  ...(payment as SwiftDetails),
                  saveAsTemplate: false,
                  status: 'NEW',
                })),
                payload.clientId
              )
            : this.paymentsService.createPayments(
                payload.data.map((payment) => ({
                  ...(payment as PaymentDetails),
                  saveAsTemplate: false,
                  status: 'NEW',
                })),
                payload.clientId
              );

        return method.pipe(
          map((result) => PayImportCommonActions.savePaymentsSuccess(result)),
          catchError((error) => of(PayImportCommonActions.savePaymentsFailure(error.message)))
        );
      })
    )
  );

  savePaymentsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayImportCommonActions.savePaymentsSuccess),
      switchMap((action) => [
        RouteActions.routeTo({ route: 'payments/list', state: { tab: 'NEW' } }),
        NotifyActions.arrayNotification({ results: this.mapResults(action.payload) }),
      ])
    )
  );

  openImportModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PayImportCommonActions.openImportModal),
        tap((action) => {
          const modal = this.modalService.open(PaymentsImportModalComponent, { windowClass: 'import-modal' });
          modal.componentInstance.onImport = (files: File[], type: 'common' | 'swift') =>
            this.store.dispatch(PayImportCommonActions.importPaymentsRequest({ files, type }));
          modal.componentInstance.isLoading$ = this.store.select(PayImportCommonSelectors.isLoading);
        })
      ),
    { dispatch: false }
  );

  importPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayImportCommonActions.importPaymentsRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap((payload) =>
        this.paymentsService.importCommonPayments(payload.data.files, payload.clientId).pipe(
          map((response) => PayImportCommonActions.importPaymentsSuccess(response)),
          catchError((error) => of(PayImportCommonActions.importPaymentsFailure(error.message)))
        )
      )
    )
  );

  importPaymentsSucess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PayImportCommonActions.importPaymentsSuccess),
      map((action) => {
        this.modalService.close(PaymentsImportModalComponent);
        return PayImportCommonActions.setResponse({ response: action.payload });
      })
    )
  );

  private mapResults(response: StatusResponse[]): ArrayNotification[] {
    return response.map((item) => {
      const notify: ArrayNotification = {
        number: item.id,
        isSuccess: item.isSuccess,
        message: item.message || '',
      };

      return notify;
    });
  }

  private mapPayment(payment: ImportResponsRow, payments: ImportResponsRow[]): PaymentModal | SwiftModal {
    const paymentModal = this.isSwift(payment)
      ? this.getSwiftModal(payment.model as SwiftDetails)
      : this.getPaymentModal(payment.model as PaymentDetails);

    paymentModal.actions = this.getActions(payment);
    paymentModal.errors = payment.error;

    const pagination = new PaginationHelper<ImportResponsRow>(payments);

    pagination.startFrom(payment);

    paymentModal.isPaginationAvailable = payments.length > 1;
    paymentModal.next = () =>
      this.store.dispatch(SharedActions.setPayment({ payment: this.mapPayment(pagination.next(), payments) }));
    paymentModal.previous = () =>
      this.store.dispatch(SharedActions.setPayment({ payment: this.mapPayment(pagination.previous(), payments) }));

    return paymentModal;
  }

  private getPaymentModal(payment: PaymentDetails): PaymentModal {
    return {
      number: payment.number,
      documentDate: payment.paymentDate,
      valueDate: payment.paymentValueDate,
      payedDate: payment.bankPayedDate,
      purpose: payment.purpose,
      amount: payment.amount,
      amountString: payment.amountString || '',
      currencyCode: payment.sender.accCurrencyCode || payment.recipient.accCurrencyCode,
      sender: {
        name: payment.sender.name,
        number: payment.sender.accNumber,
        taxCode: payment.sender.taxCode,
      },
      recipient: {
        name: payment.recipient.name,
        number: payment.recipient.accNumber,
        taxCode: payment.recipient.taxCode,
        details: payment.additionalDetails,
        countryName: payment.recipientCountryName,
      },
      actions: {},
      isPaginationAvailable: false,
      isNeedMySign: payment.isNeedMySign,
    };
  }

  private getSwiftModal(swift: SwiftDetails): SwiftModal {
    return {
      ...swift,
      actions: {},
      isPaginationAvailable: false,
    };
  }

  private isSwift(payment: ImportResponsRow): boolean {
    return 'benificiary' in payment.model;
  }

  private getActions(payment: ImportResponsRow): PaymentActionModal {
    const actions: PaymentActionModal = {};

    if (payment.status === 'ERROR' && !this.isSwift(payment)) {
      actions.edit = () => this.store.dispatch(PayImportCommonActions.editPayment({ payment }));
    } else if (payment.status === 'EXISTS') {
      actions.toSuccess = (modal: NgbActiveModal) => {
        this.store.dispatch(PayImportCommonActions.toSuccess({ payment: { ...payment, status: 'OK' } }));
        modal.close();
      };
    }

    return actions;
  }
}
