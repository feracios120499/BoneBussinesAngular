import { BankModel } from '@models/bank.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PUBLIC_KEY, PublicState } from './store';

export namespace PublicSelectors {
    export const publicStore = createFeatureSelector<PublicState>(PUBLIC_KEY);

    export const banks = createSelector(
        publicStore,
        state => state.banks
    );

    export const bank = createSelector(
        banks,
        (state: BankModel[], props: { id: string }) => state.find(p => p.BankCode === props.id)
    );

    export const logo = createSelector(
        publicStore,
        state => state.resources?.Owner.LogoImage || ''
    );

    export const callCenterPhones = createSelector(
        publicStore,
        state => state.resources?.Owner.CallCenterPhone
    );

    export const callCenterPhonesLocal = createSelector(
        publicStore,
        state => state.resources?.Owner.CallCenterPhoneLocal
    );

    export const callCenterWork = createSelector(
        publicStore,
        state => {
            return {
                from: state.resources?.Owner.CallCenterWorkFrom,
                to: state.resources?.Owner.CallCenterWorkTo
            };
        }
    );

    export const ecpSupportPhones = createSelector(
        publicStore,
        state => state.resources?.Owner.ECPTechSupportPhone
    );
}
