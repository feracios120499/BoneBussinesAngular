import { setDarkMode, setLanguage, setResources } from '@actions/settings.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from '@stores/settings.store';



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
    }))
);


