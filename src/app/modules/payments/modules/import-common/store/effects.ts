import { Injectable } from '@angular/core';
import { PaginationHelper } from '@helpers/pagination.helper';
import { b64toBlob } from '@methods/base64-to-blob.method';
import { B1EditPaymentModalComponent } from '@modals/b1-edit-payment-modal/b1-edit-payment-modal.component';
import { B1PaymentModalComponent } from '@modals/b1-payment-modal/b1-payment-modal.component';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentActionModal, PaymentModal } from '@models/payment-modal.model';
import { CreatePaymentModel } from '@models/payments/create-payment.model';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { HttpPaymentsService } from '@modules/payments/services/payments-service/http-payments.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ModalService } from '@services/modal.service';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { SharedActions } from '@store/shared/actions';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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
          const payment = action.payment.model;
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
                payment: { model: paymentSave, status: 'SUCCESS' },
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
          if (!payments) return;
          const dublicatesExist = payments.filter((p) => p.status == 'EXISTS').length > 0;
          if (!dublicatesExist) {
            this.store.dispatch(
              PayImportCommonActions.savePaymentsRequest(
                payments.filter((p) => p.status == 'SUCCESS').map((p) => p.model)
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
      switchMap((payload) =>
        this.paymentsService
          .createPayments(
            payload.data.map((payment) => ({
              ...payment,
              saveAsTemplate: false,
              status: 'NEW',
            })),
            payload.clientId
          )
          .pipe(
            map((result) => PayImportCommonActions.savePaymentsSuccess(result)),
            catchError((error) => of(PayImportCommonActions.savePaymentsFailure(error.message)))
          )
      )
    )
  );

  private mapPayment(payment: ImportResponsRow, payments: ImportResponsRow[]): PaymentModal {
    const paymentDetails = payment.model;
    const paymentModal: PaymentModal = {
      number: paymentDetails.number,
      documentDate: paymentDetails.paymentDate,
      valueDate: paymentDetails.paymentValueDate,
      payedDate: paymentDetails.bankPayedDate,
      purpose: paymentDetails.purpose,
      amount: paymentDetails.amount,
      amountString: paymentDetails.amountString || '',
      currencyCode: paymentDetails.sender.accCurrencyCode || paymentDetails.recipient.accCurrencyCode,
      sender: {
        name: paymentDetails.sender.name,
        number: paymentDetails.sender.accNumber,
        taxCode: paymentDetails.sender.taxCode,
      },
      recipient: {
        name: paymentDetails.recipient.name,
        number: paymentDetails.recipient.accNumber,
        taxCode: paymentDetails.recipient.taxCode,
        details: paymentDetails.additionalDetails,
        countryName: paymentDetails.recipientCountryName,
      },
      errors: payment.error,
      actions: this.getActions(payment),
      isPaginationAvailable: false,
    };

    const pagination = new PaginationHelper<ImportResponsRow>(payments);

    pagination.startFrom(payment);

    paymentModal.isPaginationAvailable = payments.length > 1;
    paymentModal.next = () =>
      this.store.dispatch(SharedActions.setPayment({ payment: this.mapPayment(pagination.next(), payments) }));
    paymentModal.previous = () =>
      this.store.dispatch(SharedActions.setPayment({ payment: this.mapPayment(pagination.previous(), payments) }));

    return paymentModal;
  }

  private getActions(payment: ImportResponsRow): PaymentActionModal {
    const actions: PaymentActionModal = {};

    if (payment.status == 'ERROR') {
      actions['edit'] = () => this.store.dispatch(PayImportCommonActions.editPayment({ payment }));
    } else if (payment.status == 'EXISTS') {
      actions['toSuccess'] = (modal: NgbActiveModal) => {
        this.store.dispatch(PayImportCommonActions.toSuccess({ payment: { ...payment, status: 'SUCCESS' } }));
        modal.close();
      };
    }

    return actions;
  }
}
