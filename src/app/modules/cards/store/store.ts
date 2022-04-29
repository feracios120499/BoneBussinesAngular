import { CardAccount, UiCardAccount } from '@models/cards/card-account.model';
import { CardsViewState } from '@models/enums/cards-view-state.enum';
import { Filter } from '@models/filter.model';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { CardsLoading } from '../models/cards-loading.type';

export const CARDS_KEY = 'cards';
export const CARDS_FILTER_FORM_KEY = 'cards_filter_form';

export const filerForm = createFormGroupState<Filter>(CARDS_FILTER_FORM_KEY, {
  filter: undefined,
});

export interface UiCardState {
  openAccounts: number[];
}

export interface CardsState {
  viewState: CardsViewState;
  filterForm: FormGroupState<Filter>;
  loadings: CardsLoading[];
  cardAccounts: CardAccount[];
  openAccounts: number[];
}

export const initialState: CardsState = {
  viewState: 'cards',
  filterForm: filerForm,
  loadings: [],
  cardAccounts: [],
  openAccounts: [],
};
