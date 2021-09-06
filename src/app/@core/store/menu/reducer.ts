import { createReducer, on } from '@ngrx/store';

import { MenuActions } from './actions';
import { initialState } from './store';


export const menuReducers = createReducer(
    initialState,
    on(
        MenuActions.openMenu,
        (state) => ({ ...state, isOpen: true })
    ),
    on(
        MenuActions.openInfo,
        (state) => ({ ...state, isInfoOpen: true })
    ),
    on(
        MenuActions.openCustomers,
        (state) => ({ ...state, isCustomersOpen: true })
    ),
    on(
        MenuActions.closeCustomers,
        (state) => ({ ...state, isCustomersOpen: false })
    ),
    on(
        MenuActions.closeMenu,
        (state) => ({ ...state, isOpen: false, isInfoOpen: false, isCustomersOpen: false })
    ),
    on(
        MenuActions.toggleCollapsed,
        (state) => ({ ...state, isCollapsed: !state.isCollapsed })
    ),
    on(
        MenuActions.setMenu,
        (state, action) => ({ ...state, menu: action.menu })
    ),
    on(
        MenuActions.setSubMenu,
        (state, action) => ({ ...state, subMenu: action.menu })
    )
);
