import { environment } from './../../environments/environment';
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

export const SETTINGS_KEY = 'settings';

export interface SettingsState {
    currentLanguage: string;
    allowedLanguages: string[];
}

export const initialState: SettingsState = {
    currentLanguage: 'uk',
    allowedLanguages: environment.languages
};

export const setLanguage = createAction(
    '[SETTINGS] set language',
    props<{ language: string }>()
);

export const settingsReducer = createReducer(
    initialState,
    on(setLanguage, (state, action) => ({
        ...state,
        currentLanguage: action.language
    }))
);


export const featureSelector = createFeatureSelector<SettingsState>(SETTINGS_KEY);

export const currentLanguageSelector = createSelector(
    featureSelector,
    state => state.currentLanguage
);

export const allowedLanguagesSelector = createSelector(
    featureSelector,
    state => state.allowedLanguages
);
