import { createAction, props } from '@ngrx/store';

// APP set global loader action
export const setGlobalLoader = createAction('[APP] set global loader', props<{ isLoading: boolean }>());
