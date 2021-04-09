import { setLanguage } from '@actions/settings.actions';
import { createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export const SETTINGS_KEY = 'settings';

export interface SettingsState {
    currentLanguage: string;
    allowedLanguages: string[];
}

export const initialState: SettingsState = {
    currentLanguage: 'uk',
    allowedLanguages: environment.languages
};

export const settingsReducer = createReducer(
    initialState,
    on(setLanguage, (state, action) => ({
        ...state,
        currentLanguage: action.language
    }))
);
