import { createAction, props } from '@ngrx/store';

export namespace AppActions {
    // APP set global loader action
    export const setGlobalLoader = createAction('[APP] set global loader', props<{ isLoading: boolean }>());

    export const start = createAction('[APP] start');
}

