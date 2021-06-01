import { createAction, props } from '@ngrx/store';

// routeTo action
export const routeTo = createAction(
    '[ROUTE] route to',
    props<{ route: string }>()
);

