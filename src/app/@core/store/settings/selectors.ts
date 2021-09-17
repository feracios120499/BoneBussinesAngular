import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_KEY, SettingsState } from '@store/settings/store';

export namespace SettingsSelectors {
    export const settingsStore = createFeatureSelector<SettingsState>(SETTINGS_KEY);

    export const currentLanguage = createSelector(
        settingsStore,
        state => state.currentLanguage
    );

    export const allowedLanguages = createSelector(
        settingsStore,
        state => state.allowedLanguages
    );

    export const darkMode = createSelector(
        settingsStore,
        state => state.darkModeActive
    );



}


