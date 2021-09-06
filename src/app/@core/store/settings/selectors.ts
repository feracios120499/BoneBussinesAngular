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

    export const logo = createSelector(
        settingsStore,
        state => state.resources?.Owner.LogoImage || ''
    );

    export const callCenterPhones = createSelector(
        settingsStore,
        state => state.resources?.Owner.CallCenterPhone
    );

    export const callCenterPhonesLocal = createSelector(
        settingsStore,
        state => state.resources?.Owner.CallCenterPhoneLocal
    );

    export const callCenterWork = createSelector(
        settingsStore,
        state => {
            return {
                from: state.resources?.Owner.CallCenterWorkFrom,
                to: state.resources?.Owner.CallCenterWorkTo
            };
        }
    );

    export const ecpSupportPhones = createSelector(
        settingsStore,
        state => state.resources?.Owner.ECPTechSupportPhone
    );

}


