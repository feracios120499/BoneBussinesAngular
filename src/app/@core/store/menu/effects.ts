import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MenuService } from '@services/menu.service';
import { UserActions } from '@store/user/actions';
import { UserSelectors } from '@store/user/selectors';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { Customer } from 'src/app/@shared/models/profile.model';

import { MenuActions } from './actions';
import { MenuSelectors } from './selectors';


@Injectable()
export class MenuEffects {
    constructor(private actions$: Actions, private store: Store, private menuService: MenuService) { }

    buildMenu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.setCurrentClientId),
            withLatestFrom(this.store.select(UserSelectors.currentCustomer).pipe(filter(p => !!p), map(p => p as Customer))),
            map(([, currentCustomer]) => {
                const menu = this.menuService.getMenuForCustomer(currentCustomer);
                return MenuActions.setMenu({ menu });
            })
        ));

    buildSubMenu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.setMenu),
            map(() => {
                const menu = this.menuService.getSubMenu();
                return MenuActions.setSubMenu({ menu });
            })
        ));

    toggleCustomers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.toggleCustomers),
            withLatestFrom(
                this.store.select(MenuSelectors.isOpenCustomers),
                this.store.select(UserSelectors.isAvailableChange)
            ),
            map(([, isOpen, isAvailable]) => (!isAvailable || isOpen) ? MenuActions.closeCustomers() : MenuActions.openCustomers())
        ));
}
