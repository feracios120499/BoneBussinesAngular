import { Resources } from '@models/resources.model';
import { environment } from 'src/environments/environment';

export const SETTINGS_KEY = 'settings';

export interface SettingsState {
    currentLanguage: string;
    allowedLanguages: string[];

    darkModeActive: boolean;

}

export const initialState: SettingsState = {
    currentLanguage: 'uk',
    allowedLanguages: environment.languages,

    darkModeActive: false
};
