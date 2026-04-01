import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupDocumentEdit } from '@modules/sup-documents/types/supdocument-edit.model';
import { SupDocumentPayment } from '../types/supdocument-payments.model';

export const SUP_DETAILS_KEY = 'supdocument_details';
export const SUP_EDIT_FORM = 'SUP_EDIT_FORM';

export interface SupDocumentDetailsState {
  supdocument?: SupDocument;
  payments?: SupDocumentPayment[];
  openPayments: number[];
  loadPayments: string[];
  editForm: FormGroupState<SupDocumentEdit>;

  filterTerms: string;
}

export const initialEditFormState = createFormGroupState<SupDocumentEdit>(SUP_DETAILS_KEY, {
  id: 0,
  fileName: '',
  description: '',
});

export const initialAcctDetailsState: SupDocumentDetailsState = {
  supdocument: undefined,
  payments: [],
  openPayments: [],
  loadPayments: [],
  editForm: initialEditFormState,
  filterTerms: '',
};
