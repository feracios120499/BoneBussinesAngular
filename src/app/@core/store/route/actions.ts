import { createAction, props } from '@ngrx/store';

export namespace RouteActions {
  // routeTo action
  export const routeTo = createAction('[ROUTE] route to', props<{ route: string; state?: any }>());
}
