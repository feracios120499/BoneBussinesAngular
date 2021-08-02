import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_KEY, SettingsState } from '@reducers/settings.reducers';

export const featureSelector = createFeatureSelector<SettingsState>(SETTINGS_KEY);

export const currentLanguageSelector = createSelector(
  featureSelector,
  state => state.currentLanguage
);

export const allowedLanguagesSelector = createSelector(
  featureSelector,
  state => state.allowedLanguages
);

export const darkModeSelector = createSelector(
  featureSelector,
  state => state.darkModeActive
);

export const logoSelector = createSelector(
  featureSelector,
  state => state.resources?.Owner.LogoImage || ''
);

export const callCenterPhonesSelector = createSelector(
  featureSelector,
  state => state.resources?.Owner.CallCenterPhone
);

export const callCenterPhonesLocalSelector = createSelector(
  featureSelector,
  state => state.resources?.Owner.CallCenterPhoneLocal
);

export const callCenterWorkSelector = createSelector(
  featureSelector,
  state => {
    return {
      from: state.resources?.Owner.CallCenterWorkFrom,
      to: state.resources?.Owner.CallCenterWorkTo
    };
  }
);

export const ecpSupportPhonesSelector = createSelector(
  featureSelector,
  state => state.resources?.Owner.ECPTechSupportPhone
);

export const isCollapsedSelector = createSelector(
  featureSelector,
  state => state.isCollapsed
);

export const isOpenMenu = createSelector(
  featureSelector,
  state => state.menuOpen
)
