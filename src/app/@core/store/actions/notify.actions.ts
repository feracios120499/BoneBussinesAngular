import { createAction, props } from '@ngrx/store';

// successNotification action
export const successNotification = createAction(
    '[NOTIFY] success notification',
    props<{ message: string, title?: string }>()
);
