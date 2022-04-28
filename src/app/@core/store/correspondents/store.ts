import { CorrespondentsLoading } from './models/correspondents-loading.type';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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
