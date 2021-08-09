import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState, MENU_KEY } from '@stores/menu.store';


const menuStoreSelector = createFeatureSelector<MenuState>(MENU_KEY);


export const menuSelector = createSelector(
    menuStoreSelector,
    state => state.menu
);

export const subMenuSelector = createSelector(
    menuStoreSelector,
    state => state.subMenu
);

export const isCollapsedSelector = createSelector(
    menuStoreSelector,
    state => state.isCollapsed
);

export const isOpenMenuSelector = createSelector(
    menuStoreSelector,
    state => state.isOpen
);

export const isOpenInfoSelector = createSelector(
    menuStoreSelector,
    state => state.isInfoOpen
);

export const isOpenMenuOrInfoSelector = createSelector(
    menuStoreSelector,
    state => state.isOpen || state.isInfoOpen
);
