
import { createReducer, on } from '@ngrx/store';
import { initialState } from '@store/settings/store';
import { SettingsActions } from './actions';



export const settingsReducer = createReducer(
    initialState,
    on(SettingsActions.setLanguage, (state, action) => ({
        ...state,
        currentLanguage: action.language
    })),
    on(SettingsActions.setResources, (state, action) => ({
        ...state,
        resources: action.resources
    })),
    on(SettingsActions.setDarkMode, (state, action) => ({
        ...state,
        darkModeActive: action.isActive
    }))
);


