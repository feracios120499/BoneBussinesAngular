import { MenuItem } from '@models/menu-item.model';

export const MENU_KEY = 'menu';

export interface MenuState {
    menu: MenuItem[] | undefined;
    subMenu: MenuItem[] | undefined;
    isCollapsed: boolean;
    isOpen: boolean;
    isInfoOpen: boolean;
    isCustomersOpen: boolean;
}

export const initialState: MenuState = {
    menu: undefined,
    subMenu: undefined,
    isCollapsed: false,
    isOpen: false,
    isInfoOpen: false,
    isCustomersOpen: false
};
