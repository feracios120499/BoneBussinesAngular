import { Correspondent } from '../models/correspondent.model';
import { CorrespondentsLoading } from '../models/correspondents-loading.type';

export const CORRESPONDENTS_KEY = 'correspondents';

export interface CorrespondentsState {
  correspondents: Correspondent[];
  filterTerm: string;
  loadings: CorrespondentsLoading[];
}

export const initialState: CorrespondentsState = {
  correspondents: [],
  filterTerm: '',
  loadings: [],
};
