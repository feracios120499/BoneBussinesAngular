import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_KEY, SettingsState } from '@reducers/settings.reducers';

export const featureSelector = createFeatureSelector<SettingsState>(SETTINGS_KEY);

export const currentLanguageSelector = createSelector(
  featureSelector,
  state => state.currentLanguage
);

export const allowedLanguagesSelector = createSelector(
  featureSelector,
  state => state.allowedLanguages
);
