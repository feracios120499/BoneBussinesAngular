import { UiReissuApplication } from '@models/cards/ui-reissue-application.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isAnyExist } from '@store/shared';
import { CardReissueState, CARD_REISSUE_KEY } from './store';

export namespace CardReissueSelectors {
  export const reissueStore =
    createFeatureSelector<CardReissueState>(CARD_REISSUE_KEY);

  export const tab = createSelector(reissueStore, (store) => store.tab);
  export const count = createSelector(reissueStore, (store) => store.count);

  export const isLoading = createSelector(
    reissueStore,
    (store) => store.loadings.length !== 0
  );

  export const applications = createSelector(reissueStore, (store) =>
    store.applications.map((application) => {
      const uiApplication: UiReissuApplication = {
        ...application,
        selected: isAnyExist(store.selectedApplications, application.id),
      };
      return uiApplication;
    })
  );

  export const selectAll = createSelector(
    reissueStore,
    (store) => store.selectAll
  );
}
