import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

export const APP_KEY = 'app';

export interface AppState {
    globalLoader: boolean;
    pageLoader?: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
}

export const initialState: AppState = {
    globalLoader: false
};
