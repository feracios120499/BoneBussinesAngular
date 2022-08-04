import { createReducer, on } from '@ngrx/store';
import { SupDocumentsActions } from './actions';
import { supDocInitialState } from './store';

export const supDocReducer = createReducer(
    supDocInitialState,
    on(
        SupDocumentsActions.loadDocumentsSuccess,
        (state, action) => ({ ...state, documents: action.payload })
    )
);


