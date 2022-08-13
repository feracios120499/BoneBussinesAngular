import { createReducer, on } from '@ngrx/store';
import { isAnyExist, pushIfNotExist, removeItem } from '@store/shared';
import { SupDocumentsActions } from './actions';
import { supDocInitialState } from './store';

export const supDocReducer = createReducer(
    supDocInitialState,
    on(SupDocumentsActions.loadDocuments,
      (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'list')] })
    ),
    on(SupDocumentsActions.loadDocumentsSuccess, SupDocumentsActions.loadDocumentsFailure, (state) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'list')],
      selectedIds: []
    })),
    on(
      SupDocumentsActions.loadRecipientsRequest,
      (state) => ({ ...state, loadingRecipients: true })
    ),
    on(
        SupDocumentsActions.loadDocumentsSuccess,
        (state, action) => ({ ...state, documents: action.payload, selectedIds: [] })
    ),
    on(
      SupDocumentsActions.loadRecipientsSuccess,
      (state, action) => ({ ...state, loadingRecipients: false, recipients: action.payload })
    ),
    on(
        SupDocumentsActions.filterSupdocuments,
        (state, action) => ({ ...state, filterTerm: action.term, selectedIds: [] })
    ),
    on(
        SupDocumentsActions.resetSupdocumentFilter,
        (state) => ({ ...state, filterTerm: '', selectedIds: [] })
    ),
    on(
        SupDocumentsActions.createSupdocumentRequest,
        (state) => ({ ...state, loadings: [...pushIfNotExist(state.loadings, 'create')],
      })),
    on(
      SupDocumentsActions.createSupdocumentSuccess,
      SupDocumentsActions.createSupdocumentFailure,
      (state) => ({
        ...state,
        loadings: [...removeItem(state.loadings, 'create')],
      })
    ),
    on(SupDocumentsActions.selectSupdocument, (state, action) => ({
      ...state,
      selectedIds: isAnyExist(state.selectedIds, action.supdocument.id)
        ? removeItem(state.selectedIds, action.supdocument.id)
        : pushIfNotExist(state.selectedIds, action.supdocument.id),
    })),


);


