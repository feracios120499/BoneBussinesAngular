import { Action } from '@ngrx/store';

export interface ConfirmModalConfig {
  text: string;
  callback: () => void;
}
