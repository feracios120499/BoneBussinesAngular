import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as menuActions from '@actions/menu.actions';
import * as userActions from '@actions/user.actions';
import { Store } from '@ngrx/store';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { MenuService } from '@services/menu.service';
import { currentCustomerSelector } from '@selectors/user.selectors';
import { Customer } from 'src/app/@shared/models/profile.model';
// import all requried services or any dependencies

@Injectable()
export class MenuEffects {
    constructor(private actions$: Actions, private store: Store, private menuService: MenuService) { }

    buildMenu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.setCurrentClientId),
            withLatestFrom(this.store.select(currentCustomerSelector).pipe(filter(p => !!p), map(p => p as Customer))),
            map(([, currentCustomer]) => {
                const menu = this.menuService.getMenuForCustomer(currentCustomer);
                return menuActions.setMenu({ menu });
            })
        ));

    buildSubMenu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.setMenu),
            map(() => {
                const menu = this.menuService.getSubMenu();
                return menuActions.setSubMenu({ menu });
            })
        ));
}
