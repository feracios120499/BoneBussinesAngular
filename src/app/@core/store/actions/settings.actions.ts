import { createAction, props } from '@ngrx/store';

export const setLanguage = createAction(
  '[SETTINGS] set language',
  props<{ language: string }>()
);
