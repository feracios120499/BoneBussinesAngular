import { createAction, props } from '@ngrx/store';
import { MenuItem } from 'src/app/@shared/models/menu-item.model';

// setMenu action
export const setMenu = createAction(
    '[MENU] set menu',
    props<{ menu: MenuItem[] }>()
);

export const setSubMenu = createAction(
    '[MENU] set sub menu',
    props<{ menu: MenuItem[] }>()
);

export const toggleCollapsed = createAction(
    '[MENU] toggle collapsed menu'
);

export const openMenu = createAction(
    '[MENU] open menu'
);

export const closeMenu = createAction(
    '[MENU] close menu'
);

export const openInfo = createAction(
    '[MENU] open info'
);

export const openCustomers = createAction(
    '[MENU] open customers'
);

export const closeCustomers = createAction(
    '[MENU] close customers'
);

export const toggleCustomers = createAction(
    '[MENU] toggle customers'
);
