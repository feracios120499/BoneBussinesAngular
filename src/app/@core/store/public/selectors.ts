import { BankModel } from '@models/bank.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PUBLIC_KEY, PublicState } from './store';

export namespace PublicSelectors {
  export const publicStore = createFeatureSelector<PublicState>(PUBLIC_KEY);

  export const banks = createSelector(publicStore, (state) => state.banks);

  export const bank = createSelector(banks, (state: BankModel[], props: { id: string }) =>
    state.find((p) => p.bankCode === props.id)
  );

  export const logo = createSelector(publicStore, (state) => state.resources?.owner.logoImage || '');

  export const callCenterPhones = createSelector(publicStore, (state) => state.resources?.owner.callCenterPhone);

  export const callCenterPhonesLocal = createSelector(
    publicStore,
    (state) => state.resources?.owner.callCenterPhoneLocal
  );

  export const callCenterWork = createSelector(publicStore, (state) => {
    return {
      from: state.resources?.owner.callCenterWorkFrom,
      to: state.resources?.owner.callCenterWorkTo,
    };
  });

  export const ecpSupportPhones = createSelector(publicStore, (state) => state.resources?.owner.ecpTechSupportPhone);

  export const ecpSupportPhonesLocal = createSelector(
    publicStore,
    (state) => state.resources?.owner.ecpTechSupportPhoneLocal
  );

  export const payTypes = createSelector(publicStore, (state) => state.payTypes);

  export const mobileAppLinks = createSelector(publicStore, (state) => state.mobileAppLinks);

  export const copyright = createSelector(publicStore, (state) => state.resources?.owner.copyright);

  export const isLoadingFeedbackSend = createSelector(publicStore, (state) => state.loadings.includes('sendFeedback'));

  export const currentVersion = createSelector(publicStore, (state) => state.resources?.owner.version);

  export const watchVersion = createSelector(publicStore, (state) => state.watchVersion);
}
