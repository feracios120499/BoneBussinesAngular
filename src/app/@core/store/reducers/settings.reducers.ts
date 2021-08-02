import { openMenu, setDarkMode, setLanguage, setResources, toggleCollapsed } from '@actions/settings.actions';
import { createReducer, on } from '@ngrx/store';
import { Resources } from 'src/app/@shared/models/resources.model';
import { environment } from 'src/environments/environment';

export const SETTINGS_KEY = 'settings';

export interface SettingsState {
    currentLanguage: string;
    allowedLanguages: string[];
    resources: Resources | undefined;
    darkModeActive: boolean;
    isCollapsed: boolean;
    menuOpen: boolean;
}

export const initialState: SettingsState = {
    currentLanguage: 'uk',
    allowedLanguages: environment.languages,
    resources: undefined,
    darkModeActive: false,
    isCollapsed: false,
    menuOpen: false
};

export const settingsReducer = createReducer(
    initialState,
    on(setLanguage, (state, action) => ({
        ...state,
        currentLanguage: action.language
    })),
    on(setResources, (state, action) => ({
        ...state,
        resources: action.resources
    })),
    on(setDarkMode, (state, action) => ({
        ...state,
        darkModeActive: action.isActive
    })),
    on(
        openMenu,
        (state) => ({ ...state, menuOpen: true })
    ),
    on(
        toggleCollapsed,
        (state, action) => ({ ...state, isCollapsed: !state.isCollapsed })
    )
);


