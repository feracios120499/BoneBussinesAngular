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
}
