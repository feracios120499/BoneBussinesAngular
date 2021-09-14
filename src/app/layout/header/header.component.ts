import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@core/facades/user.facade';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { AppSelectors } from '@store/app/selectors';
import { MenuActions } from '@store/menu/actions';
import { MenuSelectors } from '@store/menu/selectors';
import { SettingsSelectors } from '@store/settings/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private userFacade: UserFacade, private store: Store, private resizeService: ResizeService) { }

  public countCustomers$ = this.userFacade.countCustomers$;
  public logo$ = this.store.select(SettingsSelectors.logo);
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



}
