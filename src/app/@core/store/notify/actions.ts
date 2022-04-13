import { ServerError } from '@models/errors/server-error.model';
import { createAction, props } from '@ngrx/store';

export namespace NotifyActions {
  // successNotification action
  export const successNotification = createAction(
    '[NOTIFY] success notification',
    props<{ message: string; title?: string }>()
  );
  // ERRORNotification action
  export const errorNotification = createAction(
    '[NOTIFY] error notification',
    props<{ message: string; title?: string }>()
  );

  export const serverErrorNotification = createAction(
    '[NOTIFY] server error notification',
    props<{ error: ServerError; message: string; title?: string }>()
  );
}
