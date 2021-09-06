import { createAction, props } from '@ngrx/store';


export namespace NotifyActions {
    // successNotification action
    export const successNotification = createAction(
        '[NOTIFY] success notification',
        props<{ message: string, title?: string }>()
    );

}
