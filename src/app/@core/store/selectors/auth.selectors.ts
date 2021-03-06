import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_KEY, AuthState } from '@reducers/auth.reducers';

export const featureSelector = createFeatureSelector<AuthState>(AUTH_KEY);

export const phoneSelector = createSelector(
  featureSelector,
  state => state.phone
);

export const loginDataSelector = createSelector(
  featureSelector,
  state => state.loginData
);

export const errorSelector = createSelector(
  featureSelector,
  state => state.error
);

export const isLoadingSelector = createSelector(
  featureSelector,
  state => state.isLoading
);

export const tokenSelector = createSelector(
  featureSelector,
  state => state.token
);

export const isNeedOtpSelector = createSelector(
  featureSelector,
  state => state.isNeedOtp
);
