import { createAction, props } from '@ngrx/store';
import { Resources } from 'src/app/@shared/models/resources.model';

export const setLanguage = createAction(
  '[SETTINGS] set language',
  props<{ language: string }>()
);

// SETTINGS set resources
export const setResources = createAction('[SETTINGS] set resources', props<{ resources: Resources }>());

// SETTINGS load resources
export const loadResources = createAction('[SETTINGS] load resources');

// SETTINGS set dark mode
export const setDarkMode = createAction(
  '[SETTINGS] set dark mode',
  props<{ isActive: boolean }>()
);

export const toggleCollapsed = createAction(
  '[SETTINGS] toggle collapsed menu'
);
