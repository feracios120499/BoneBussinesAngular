import { DateRangeString } from '@models/date-range.model';
import {
  ActionCreator,
  createAction,
  DefaultProjectorFn,
  MemoizedSelector,
  Store,
} from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { UserSelectors } from '@store/user/selectors';
import dayjs from 'dayjs';
import { box, Boxed, NgrxValueConverter } from 'ngrx-forms';
import { from, Observable } from 'rxjs';
import { filter, last, map, mergeMap, take, toArray } from 'rxjs/operators';

export function createHTTPActions<
  RequestPayload = void,
  ResponsePayload = void,
  ErrorPayload = void
>(
  actionType: string
): [
  ActionCreator<
    string,
    (props: RequestPayload) => {
      payload: RequestPayload;
    } & TypedAction<string>
  >,
  ActionCreator<
    string,
    (props: ResponsePayload) => {
      payload: ResponsePayload;
    } & TypedAction<string>
  >,
  ActionCreator<
    string,
    (props: ErrorPayload) => {
      payload: ErrorPayload;
    } & TypedAction<string>
  >
] {
  return [
    createAction(actionType, (payload: RequestPayload) => ({ payload })),
    createAction(`${actionType} Success`, (payload: ResponsePayload) => ({
      payload,
    })),
    createAction(`${actionType} Error`, (payload: ErrorPayload) => ({
      payload,
    })),
  ];
}

export function clientIdWithData<T>(
  store: Store,
  data: T
): Observable<{ clientId: string; data: T }> {
  return UserSelectors.currentClientIdFiltered(store).pipe(
    take(1),
    map((clientId) => ({ clientId, data }))
  );
}

export function clientIdWithoudData(store: Store): Observable<string> {
  return UserSelectors.currentClientIdFiltered(store).pipe(take(1));
}

export const rangeValueConverter: NgrxValueConverter<
  any,
  Boxed<DateRangeString>
> = {
  convertStateToViewValue: (value) => ({
    start: value.value.start,
    end: value.value.end,
  }),
  convertViewToStateValue: (value) =>
    box({
      start: dayjs.isDayjs(value.start)
        ? value.start.toISOString()
        : value.start,
      end: dayjs.isDayjs(value.end) ? value.end.toISOString() : value.end,
    }),
};

export function notNullAndUndefined<T>(
  store: Store,
  selector: MemoizedSelector<
    object,
    T | undefined,
    DefaultProjectorFn<T | undefined>
  >
): Observable<T> {
  return store.select(selector).pipe(
    filter((p) => !!p),
    map((p) => p as T)
  );
}

export function required<T>(source$: Observable<T | undefined>): Observable<T> {
  return source$.pipe(
    filter((p) => !!p),
    map((p) => p as T)
  );
}

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const findIndex = arr.indexOf(value);
  if (findIndex > -1) {
    return arr.filter((_, index) => index !== findIndex);
  }
  return arr;
}

export function pushIfNotExist<T>(arr: Array<T>, value: T): Array<T> {
  const findIndex = arr.indexOf(value);
  if (findIndex === -1) {
    return [...arr, value];
  }
  return arr;
}

export function isAnyExist<T>(arr1: Array<T>, value: T): boolean {
  return arr1.indexOf(value) >= 0;
}
export function isAnyExistArray<T>(arr1: Array<T>, arr2: Array<T>): boolean {
  return arr1.some((r) => arr2.indexOf(r) >= 0);
}

export function forkJoinConcurrent<T>(
  observables: Observable<T>[],
  concurrent: number
): Observable<T[]> {
  // Convert the array of observables to a higher-order observable:
  return from(observables).pipe(
    // Merge each of the observables in the higher-order observable
    // into a single stream:
    mergeMap(
      (observable, observableIndex) =>
        observable.pipe(
          // Like forkJoin, we're interested only in the last value:
          last(),
          // Combine the value with the index so that the stream of merged
          // values - which could be in any order - can be sorted to match
          // the order of the source observables:
          map((value) => ({ index: observableIndex, value }))
        ),
      concurrent
    ),
    // Convert the stream of last values to an array:
    toArray(),
    // Sort the array of value/index pairs by index - so the value
    // indices correspond to the source observable indices and then
    // map the pair to the value:
    map((pairs) =>
      pairs.sort((l, r) => l.index - r.index).map((pair) => pair.value)
    )
  );
}
