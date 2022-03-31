import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnRunEffects } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mergeMap, switchMap } from "rxjs/operators";
import { CardDetailsActions } from "./actions";

@Injectable({
    providedIn: 'root'
})
export class CardDetailsEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
    ) {

    }

    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CardDetailsActions.loadData),
            switchMap(() => [
                CardDetailsActions.loadCardRequest(),
                CardDetailsActions.loadSmsStatusRequest(),
                CardDetailsActions.loadLimitsRequest()
            ])
        )
    );
}