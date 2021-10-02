import { FileModel } from '@models/file.model';
import { ExportTurnoverModalConfig } from '@models/modals/export-turnover-modal-config.model';
import { RequisitesModalConfig } from '@models/modals/requisites-modal-config.model';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentModal } from '@models/payment-modal.model';
import { StatementModalConfig } from '@models/statement-modal-config.model';
import { createAction, DefaultProjectorFn, MemoizedSelector, props } from '@ngrx/store';

export namespace SharedActions {
    export const showPayment = createAction('[SHARED] show payment', props<{ payment: Partial<PaymentModal> }>());
    export const setPayment = createAction('[SHARED] set payment', props<{ payment: Partial<PaymentModal> }>());
    export const setPaymentLoader = createAction(
        '[SHARED] set payment loader',
        props<{ loader: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>> }>()
    );


    export const showStatement = createAction('[SHARED] show statement', props<{ config: StatementModalConfig }>());

    export const showRequisites = createAction('[SHARED] show requisites', props<{ config: RequisitesModalConfig }>());

    export const showExportTurnovers = createAction('[SHARED] show export turnvoers', props<{ config: ExportTurnoverModalConfig }>());

    export const saveFile = createAction('[SHARED] save file', props<{ file: FileModel }>());

    export const printFile = createAction('[SHARED] print file', props<{ html: string }>());

    export const setCreatePayment = createAction(`[SHARED] set create payment`, props<{ payment: PaymentForm }>());

    export const clearCreatePayment = createAction('[SHARED] clear create payment');
}


