import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ModalService } from '@services/modal.service';
import { B1ConfirmModalComponent } from '@modals/b1-confirm-modal/b1-confirm-modal.component';
import { B1CorrespondentsModalComponent } from '@modals/b1-correspondents-modal/b1-correspondents-modal.component';
import { saveAs } from 'file-saver';
import { tap } from 'rxjs/operators';
import { B1ExportTurnoversComponent } from 'src/app/@shared/components/modals/b1-export-turnovers/b1-export-turnovers.component';
import { B1PaymentModalComponent } from 'src/app/@shared/components/modals/b1-payment-modal/b1-payment-modal.component';
import { B1RequisitesModalComponent } from 'src/app/@shared/components/modals/b1-requisites-modal/b1-requisites-modal.component';
import { B1StatementModalComponent } from 'src/app/@shared/components/modals/b1-statement-modal/b1-statement-modal.component';

import { SharedActions } from './actions';

@Injectable()
export class SharedEffects {
  constructor(private actions$: Actions, private modalService: ModalService) {}

  showPaymentModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.showPayment),
        tap((action) => {
          const modalRef = this.modalService.open(B1PaymentModalComponent, {
            windowClass: 'payment-modal',
          });
        })
      ),
    { dispatch: false }
  );

  showStatementModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.showStatement),
        tap((action) => {
          const modalRef = this.modalService.open(B1StatementModalComponent);
          modalRef.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );

  showRequisitesModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.showRequisites),
        tap((action) => {
          const modalRef = this.modalService.open(B1RequisitesModalComponent);
          modalRef.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );

  showExportTurnoversModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.showExportTurnovers),
        tap((action) => {
          const modalRef = this.modalService.open(B1ExportTurnoversComponent);
          modalRef.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );

  saveFile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.saveFile),
        tap((action) => {
          if (action.file.blob) {
            saveAs(action.file.blob, action.file.name);
          }
        })
      ),
    { dispatch: false }
  );

  printFile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.printFile),
        tap((action) => {
          const file = action.html;

          const printWindow = window.open(
            'about:blank',
            '',
            'width=700,height=600'
          );

          if (!printWindow) {
            return;
          }

          printWindow.document.write(file);

          // required for IE >= 10
          printWindow.document.close();
          printWindow.focus();

          printWindow.document.body.onload = () => {
            if (!printWindow) {
              return;
            }
            // continue to print
            printWindow.print();
            printWindow.close();
          };
        })
      ),
    { dispatch: false }
  );

  showConfirm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.showConfirm),
        tap((action) => {
          const modalRef = this.modalService.open(B1ConfirmModalComponent, {
            size: 'sm',
          });
          modalRef.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );

  showCorrespondentsModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedActions.showCorrespondents),
        tap((action) => {
          const modalRef = this.modalService.open(
            B1CorrespondentsModalComponent,
            {
              windowClass: 'correspondents-modal',
            }
          );
          modalRef.componentInstance.config = action.config;
        })
      ),
    { dispatch: false }
  );
}
