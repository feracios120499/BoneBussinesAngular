import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SupDocumentsState, SUP_DOC_KEY } from './store';

export namespace SupDocumentsSelectors {

    export const supDocState = createFeatureSelector<SupDocumentsState>(SUP_DOC_KEY);
    export const documents = createSelector(
        supDocState,
        (state) => state.documents
    );

    export const signedDocuments = createSelector(
        supDocState,
        (state) => state.documents.filter(p => p.status === 'SIGNED').sort((a, b) => a.lastActiveDate > b.lastActiveDate ? 1 : 0)
    );

    export const isLoading = createSelector(
        supDocState,
        (state) => !!state.loadings.length
    );
    export const isInitialLoadingSupdocuments = createSelector(
        supDocState,
        (state) => !state.documents.length && state.loadings.includes('list')
    );
    export const isLoadingSupdocuments = createSelector(
        supDocState,
        (state) => state.loadings.includes('list')
    );
    export const isLoadingSupdocumentsCreate = createSelector(
        supDocState,
        (state) => state.loadings.includes('create')
  );
    export const filterTerm = createSelector(
        supDocState,
        (state) => state.filterTerm);

}
