import { SignProvider } from '@b1-types/sign-providers.type';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export const APP_KEY = 'app';

export interface AppState {
  globalLoader: boolean;
  pageLoader?: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
  signProvider: SignProvider;
}

export const initialState: AppState = {
  globalLoader: false,
  signProvider: environment.defaultSignProvider as unknown as SignProvider,
};
