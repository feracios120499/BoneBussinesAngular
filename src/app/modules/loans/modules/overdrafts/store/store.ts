import { Overdraft } from '../../../models/overdraft.model';
import { OverdraftsLoading } from '../models/overdrafts-loading.type';

export const OVERDRAFTS_KEY = 'overdrafts';

export interface OverdraftsState {
  overdrafts: Overdraft[];
  filterTerm: string;
  loadings: OverdraftsLoading[];
}

export const initialState: OverdraftsState = {
  overdrafts: [],
  filterTerm: '',
  loadings: [],
};
