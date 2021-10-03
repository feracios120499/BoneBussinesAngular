import { Injectable } from '@angular/core';
import { BankModel } from '@models/bank.model';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { PublicActions } from '@store/public/actions';
import { PublicSelectors } from '@store/public/selectors';
import { Observable, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BanksStoreService {


    constructor(private store: Store, private actions$: Actions) {

    }

    getBank(bankCode: string): Observable<BankModel | undefined> {
        return this.store.pipe(
            select(PublicSelectors.bank, { id: bankCode }),
            first(),
            switchMap((bank) => {
                if (bank) {
                    return of(bank);
                }
                this.store.dispatch(PublicActions.loadBankRequest(bankCode));
                return this.actions$.pipe(
                    ofType(PublicActions.loadBankSuccess, PublicActions.loadBankFailure),
                    map((action) => {
                        if (action.type === PublicActions.loadBankSuccess.type) {
                            const bankResponse = action.payload as BankModel;
                            if (bankResponse.BankCode === bankCode) {
                                return bankResponse;
                            }
                        }

                        return undefined;
                    })
                );
            })
        );
    }
}
