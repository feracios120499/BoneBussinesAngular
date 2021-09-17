import { createAction, props } from '@ngrx/store';
import { Resources } from 'src/app/@shared/models/resources.model';


export namespace SettingsActions {
    export const setLanguage = createAction(
        '[SETTINGS] set language',
        props<{ language: string }>()
    );

    // SETTINGS set dark mode
    export const setDarkMode = createAction(
        '[SETTINGS] set dark mode',
        props<{ isActive: boolean }>()
    );
}



