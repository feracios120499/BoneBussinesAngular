import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WithinCountryPaymentSelectors } from './within-country-payment/selectors';
import { WithinCountryPaymentState, WITHIN_COUNTRY_KEY } from './within-country-payment/store';

export namespace PaySelectors {

    const withinCountryState = createFeatureSelector<WithinCountryPaymentState>(WITHIN_COUNTRY_KEY);
    export const showCreateTabs = createSelector(
        withinCountryState,
        (state) => state.progress === 'form'
    );
}
