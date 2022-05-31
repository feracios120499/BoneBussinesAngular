import { SelectAccountsList } from '@models/select-accounts-list.model';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaySelectors } from '../selectors';

import { PAY_FORMS_KEY, PayFormsState } from './store';

export namespace PayFormsSelectors {
  export const payFormState = createFeatureSelector<PayFormsState>(PAY_FORMS_KEY);

  export const recipientAccounts = createSelector(
    AcctSelectors.recipientPaymentAccounts,
    AcctSelectors.isLoadingAccounts,
    (accounts, isLoading): SelectAccountsList => ({ accounts: accounts || [], isLoading })
  );

  export const progress = createSelector(payFormState, (state) => state.progress);

  export const payment = createSelector(payFormState, (state) => state.payment);

  export const createdPayment = createSelector(payFormState, (state) => state.createdPayment);

  export const createLoading = createSelector(payFormState, (state) => state.isLoading);

  export const pageLoader = createSelector(
    AcctSelectors.isLoadingAccounts,
    PaySelectors.paymentLoading,
    PaySelectors.onSignLoading,
    PaySelectors.signLoading,
    PaySelectors.toBankLoading,
    createLoading,
    (isLoadingAccounts, paymentLoading, onSignLoading, signLoading, toBankLoading, loading) =>
      isLoadingAccounts || paymentLoading || onSignLoading || signLoading || toBankLoading || loading
  );

  export const showCreateTabs = createSelector(payFormState, (state) => state.progress === 'form');
}
