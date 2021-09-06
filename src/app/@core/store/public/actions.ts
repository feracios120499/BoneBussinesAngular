import { createAction, props } from '@ngrx/store';
import { BankModel } from 'src/app/@shared/models/bank.model';

export namespace PublicActions {
    export const loadBanks = createAction(
        '[PUBLIC] loadBanks',
    );

    export const loadBanksSuccess = createAction(
        '[PUBLIC] load banks Success',
        props<{ banks: BankModel[] }>()
    );

    export const loadBanksFailure = createAction(
        '[PUBLIC] load banks Failure',
        props<{ error: string }>()
    );
}

