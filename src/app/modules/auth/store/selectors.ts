import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, AUTH_KEY } from './store';

export namespace AuthSelectors {
  export const authStore = createFeatureSelector<AuthState>(AUTH_KEY);

  export const phone = createSelector(authStore, (state) => state.phone);

  export const error = createSelector(authStore, (state) => state.error);

  export const isLoading = createSelector(authStore, (state) => !!state.loadings.length);

  export const isLoadingPassRestrictions = createSelector(
    authStore,
    (state) => !!state.loadings.includes('loadPassRestrictions')
  );

  export const token = createSelector(authStore, (state) => state.token);

  export const isNeedOtp = createSelector(authStore, (state) => state.isNeedOtp);

  export const cryptorTokens = createSelector(authStore, (state) => state.cryptor.tokens);

  export const cryptorKeys = createSelector(authStore, (state) => state.cryptor.keys);

  export const cryptorToken = createSelector(authStore, (state) => state.cryptor.token);

  export const cryptorKey = createSelector(authStore, (state) => state.cryptor.key);

  export const currentCryptorKey = createSelector(authStore, (state) => state.userKey);

  export const passRestrictions = createSelector(authStore, (state) => state.passRestrictions);

  export const techPassword = createSelector(authStore, (state) => state.techPassword);

  export const changePasswordData = createSelector(authStore, (state) => state.changePasswordData);
}
