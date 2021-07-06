import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, APP_KEY } from '@reducers/app.reducers';

export const featureSelector = createFeatureSelector<AppState>(APP_KEY);

export const globalLoaderSelector = createSelector(
    featureSelector,
    state => state.globalLoader
);
