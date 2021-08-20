import { ActionCreator, createAction, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { currentClientIdFilteredSelector } from '@selectors/user.selectors';
import { Observable } from 'rxjs';
import { first, map, switchMap, take } from 'rxjs/operators';

export function createHTTPActions<RequestPayload = void, ResponsePayload = void, ErrorPayload = void>(
    actionType: string,
): [
        ActionCreator<string, (props: RequestPayload) => {
            payload: RequestPayload;
        } & TypedAction<string>>,
        ActionCreator<string, (props: ResponsePayload) => {
            payload: ResponsePayload;
        } & TypedAction<string>>,
        ActionCreator<string, (props: ErrorPayload) => {
            payload: ErrorPayload;
        } & TypedAction<string>>,
    ] {
    return [
        createAction(actionType, (payload: RequestPayload) => ({ payload })),
        createAction(
            `${actionType} Success`,
            (payload: ResponsePayload) => ({ payload })),
        createAction(`${actionType} Error`, (payload: ErrorPayload) => ({ payload })),
    ];
}

export function clientIdWithData<T>(store: Store, data: T): Observable<{ clientId: string, data: T }> {
    return currentClientIdFilteredSelector(store).pipe(
        take(1),
        map(clientId => ({ clientId, data }))
    );
}



