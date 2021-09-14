import { DateRangeString } from '@models/date-range.model';
import { ActionCreator, createAction, DefaultProjectorFn, MemoizedSelector, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { UserSelectors } from '@store/user/selectors';
import dayjs from 'dayjs';
import { box, Boxed, NgrxValueConverter } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

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
    return UserSelectors.currentClientIdFiltered(store).pipe(
        take(1),
        map(clientId => ({ clientId, data }))
    );
}

export function clientIdWithoudData(store: Store): Observable<string> {
    return UserSelectors.currentClientIdFiltered(store).pipe(
        take(1)
    );
}

export const rangeValueConverter: NgrxValueConverter<any, Boxed<DateRangeString>> = {
    convertStateToViewValue: value => ({ start: value.value.start, end: value.value.end }),
    convertViewToStateValue: value => box(
        {
            start: dayjs.isDayjs(value.start) ? value.start.toISOString() : value.start,
            end: dayjs.isDayjs(value.end) ? value.end.toISOString() : value.end
        })
};


export function notNullAndUndefined<T>(
    store: Store,
    selector: MemoizedSelector<object, T | undefined, DefaultProjectorFn<T | undefined>>): Observable<T> {
    return store.select(selector).pipe(filter(p => !!p), map(p => p as T));
}



