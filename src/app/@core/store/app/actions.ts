import { createAction, DefaultProjectorFn, MemoizedSelector, props } from '@ngrx/store';

export namespace AppActions {
  // APP set global loader action
  export const setGlobalLoader = createAction('[APP] set global loader', props<{ isLoading: boolean }>());

  export const start = createAction('[APP] start');

  export const setPageLoader = createAction(
    '[APP] set page loader',
    props<{ loader: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>> }>()
  );

  export const activateDemo = createAction('[APP] activate demo mode');

  export const disableDemoMode = createAction('[APP] disable demo mode');
}
