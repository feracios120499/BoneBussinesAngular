import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_KEY, UserState } from '@reducers/user.reducers';

export const featureSelector = createFeatureSelector<UserState>(USER_KEY);

export const profileSelector = createSelector(
    featureSelector,
    state => state.profile
);
