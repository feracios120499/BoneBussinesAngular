import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MENU_KEY, MenuState } from './store';


export namespace MenuSelectors {
    const menuStore = createFeatureSelector<MenuState>(MENU_KEY);


    export const menu = createSelector(
        menuStore,
        state => state.menu
    );

    export const subMenu = createSelector(
        menuStore,
        state => state.subMenu
    );

    export const isCollapsed = createSelector(
        menuStore,
        state => state.isCollapsed
    );

    export const isOpenMenu = createSelector(
        menuStore,
        state => state.isOpen
    );

    export const isOpenInfo = createSelector(
        menuStore,
        state => state.isInfoOpen
    );

    export const isOpenMenuOrInfo = createSelector(
        menuStore,
        state => state.isOpen || state.isInfoOpen
    );

    export const isOpenCustomers = createSelector(
        menuStore,
        state => state.isCustomersOpen
    );
}

