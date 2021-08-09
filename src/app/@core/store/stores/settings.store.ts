import { Resources } from 'src/app/@shared/models/resources.model';
import { environment } from 'src/environments/environment';

export const SETTINGS_KEY = 'settings';

export interface SettingsState {
    currentLanguage: string;
    allowedLanguages: string[];
    resources: Resources | undefined;
    darkModeActive: boolean;

}

export const initialState: SettingsState = {
    currentLanguage: 'uk',
    allowedLanguages: environment.languages,
    resources: undefined,
    darkModeActive: false
};
