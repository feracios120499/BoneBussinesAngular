import { createReducer, on } from '@ngrx/store';
import { initialState } from '@stores/menu.store';
import * as menuActions from '@actions/menu.actions';

export const menuReducers = createReducer(
    initialState,
    on(
        menuActions.openMenu,
        (state) => ({ ...state, isOpen: true })
    ),
    on(
        menuActions.openInfo,
        (state) => ({ ...state, isInfoOpen: true })
    ),
    on(
        menuActions.closeMenu,
        (state) => ({ ...state, isOpen: false, isInfoOpen: false })
    ),
    on(
        menuActions.toggleCollapsed,
        (state) => ({ ...state, isCollapsed: !state.isCollapsed })
    ),
    on(
        menuActions.setMenu,
        (state, action) => ({ ...state, menu: action.menu })
    ),
    on(
        menuActions.setSubMenu,
        (state, action) => ({ ...state, subMenu: action.menu })
    )
);
