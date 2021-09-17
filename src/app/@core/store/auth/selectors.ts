import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, AUTH_KEY } from './store';

export namespace AuthSelectors {
    export const authStore = createFeatureSelector<AuthState>(AUTH_KEY);

    export const phone = createSelector(
        authStore,
        state => state.phone
    );

    export const error = createSelector(
        authStore,
        state => state.error
    );

    export const isLoading = createSelector(
        authStore,
        state => state.isLoading
    );

    export const token = createSelector(
        authStore,
        state => state.token
    );

    export const isNeedOtp = createSelector(
        authStore,
        state => state.isNeedOtp
    );

}
