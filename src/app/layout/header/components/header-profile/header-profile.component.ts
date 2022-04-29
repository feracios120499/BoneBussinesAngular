import { Component, OnInit } from '@angular/core';
import { AuthActions } from '@modules/auth/store/actions';
import { Store } from '@ngrx/store';
import { UserSelectors } from '@store/user/selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss', './../../header.component.scss'],
})
export class HeaderProfileComponent implements OnInit {
  constructor(private store: Store) {}

  public userName$ = this.store.select(UserSelectors.userName);
  public userPictureUrl$ = this.store.select(UserSelectors.userPicture);
  public userEmail$ = this.store.select(UserSelectors.userEmail);
  public userPhone$ = this.store.select(UserSelectors.userPhone);
  public links = [
    {
      translate: 'header.navbar.Profile',
      icon: 'user',
      url: '', // TODO add url
    },
    {
      translate: 'header.navbar.Settings',
      icon: 'settings',
      url: '', // TODO add url
    },
  ];
  ngOnInit(): void {}

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  handleError(event: any): void {
    event.target.src = environment.defaultUserPictureUrl;
  }
}
