import { DatePipe } from '@angular/common';
import { UiSupDocumentListItem } from '@models/sup-documents/sup-document.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SupdocumentsFilterPipe } from '@pipes/supdocuments-filter/supdocuments-filter.pipe';
import { FilterService } from '@services/filter.service';
import { isAnyExist } from '@store/shared';
import { SupDocumentsState, SUP_DOC_KEY } from './store';

export namespace SupDocumentsSelectors {

    export const supDocState = createFeatureSelector<SupDocumentsState>(SUP_DOC_KEY);
    export const documents = createSelector(
        supDocState,
        (state) => state.documents.map((supdocument) => {
            const uiSupdocument: UiSupDocumentListItem={
                ...supdocument,
                selected: isAnyExist(state.selectedIds, supdocument.id),
            };
            return uiSupdocument;
        })
    );

    export const recipients = createSelector(
        supDocState,
        (state) => state.recipients
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
    export const isLoadingRecipients = createSelector(
        supDocState,
        (state) => !state.loadingRecipients
    );
    export const filterTerm = createSelector(
        supDocState,
        (state) => state.filterTerm
    );
    export const filteredSupdocuments = createSelector(documents, supDocState, (uiSupdocuments, state) => {
        const supdocumentFilter = new SupdocumentsFilterPipe(new FilterService(new DatePipe(window.navigator.language)));

        return supdocumentFilter.transform(uiSupdocuments, state.filterTerm);
    });

    export const selectedIds = createSelector(
        supDocState,
        (state) => state.selectedIds
    );


}
