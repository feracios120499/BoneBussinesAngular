import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { MenuActions } from '@store/menu/actions';
import { MenuSelectors } from '@store/menu/selectors';
import { PublicSelectors } from '@store/public/selectors';
import { SettingsSelectors } from '@store/settings/selectors';
import { SharedActions } from '@store/shared/actions';
import { UserSelectors } from '@store/user/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  public countCustomers$ = this.store.select(UserSelectors.countCustomers);
  public logo$ = this.store.select(PublicSelectors.logo);
  public isCollapsed$ = this.store.select(MenuSelectors.isCollapsed);
  public isOpen$ = this.store.select(MenuSelectors.isOpenMenuOrInfo);
  public isOpenInfo$ = this.store.select(MenuSelectors.isOpenInfo);
  public isMobile$ = this.resizeService.isMobile$;
  ngOnInit(): void {
    // this.disableDarkMode()
  }

  openMenu(): void {
    this.store.dispatch(MenuActions.openMenu());
  }

  openInfo(): void {
    this.store.dispatch(MenuActions.openInfo());
  }

  closeMenu(): void {
    this.store.dispatch(MenuActions.closeMenu());
  }

  onChangeCustomersClick(): void {
    this.store.dispatch(SharedActions.showCustomers());
  }
}
