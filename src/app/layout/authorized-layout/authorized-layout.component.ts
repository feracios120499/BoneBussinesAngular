import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuSelectors } from '@store/menu/selectors';
import { UserActions } from '@store/user/actions';

@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss']
})
export class AuthorizedLayoutComponent implements OnInit {

  public isCollapsed$ = this.store.select(MenuSelectors.isCollapsed);
  public isOpen$ = this.store.select(MenuSelectors.isOpenMenu);
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadProfileRequest());
  }
}
