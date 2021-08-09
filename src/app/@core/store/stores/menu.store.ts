import { MenuItem } from 'src/app/@shared/models/menu-item.model';

export const MENU_KEY = 'menu';

export interface MenuState {
    menu: MenuItem[] | undefined;
    subMenu: MenuItem[] | undefined;
    isCollapsed: boolean;
    isOpen: boolean;
    isInfoOpen: boolean;
}

export const initialState: MenuState = {
    menu: undefined,
    subMenu: undefined,
    isCollapsed: false,
    isOpen: false,
    isInfoOpen: false
};
