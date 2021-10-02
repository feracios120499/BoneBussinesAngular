import { SelectAccountsList } from '@models/select-accounts-list.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AcctSelectors } from '@store/acct/selectors';
import { WithinCountryPaymentState, WITHIN_COUNTRY_KEY } from './store';

export namespace WithinCountryPaymentSelectors {

    export const withinCountryState = createFeatureSelector<WithinCountryPaymentState>(WITHIN_COUNTRY_KEY);

    export const senderAccounts = createSelector(
        AcctSelectors.activeAccounts,
        AcctSelectors.isLoadingAccounts,
        (accounts, isLoading): SelectAccountsList => ({ accounts: accounts || [], isLoading })
    );



    export const progress = createSelector(
        withinCountryState,
        (state) => state.progress
    );

    export const payment = createSelector(
        withinCountryState,
        (state) => state.payment
    );
}
