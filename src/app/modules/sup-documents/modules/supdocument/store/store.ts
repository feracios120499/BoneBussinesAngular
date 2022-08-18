import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupDocumentEdit } from '@modules/sup-documents/types/supdocument-edit.model';
import { PaymentModal } from '@models/payment-modal.model';

export const SUP_DETAILS_KEY = 'supdocument_details';
export const SUP_EDIT_FORM = 'SUP_EDIT_FORM';

export interface SupDocumentDetailsState {
  supdocument?: SupDocument;
  payments?: PaymentModal[];
  openPayments: number[];
  loadPayments: string[];
  editForm: FormGroupState<SupDocumentEdit>;
}

export const initialEditFormState = createFormGroupState<SupDocumentEdit>(SUP_DETAILS_KEY, {
  id: 0,
  fileName: '',
  description: '',
});

export const initialAcctDetailsState: SupDocumentDetailsState = {
  supdocument: undefined,
  payments: undefined,
  openPayments: [],
  loadPayments: [],
  editForm: initialEditFormState,
};
