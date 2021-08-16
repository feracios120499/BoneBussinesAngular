import { logout } from '@actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userEmailSelector, userNameSelector, userPhoneSelector, userPictureSelector } from '@selectors/user.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss', './../../header.component.scss']
})
export class HeaderProfileComponent implements OnInit {

  constructor(private store: Store) { }

  public userName$ = this.store.select(userNameSelector);
  public userPictureUrl$ = this.store.select(userPictureSelector);
  public userEmail$ = this.store.select(userEmailSelector);
  public userPhone$ = this.store.select(userPhoneSelector);
  public links = [
    {
      translate: 'header.navbar.Profile',
      icon: 'user',
      url: '' // TODO add url
    },
    {
      translate: 'header.navbar.Settings',
      icon: 'settings',
      url: '' // TODO add url
    }
  ];
  ngOnInit(): void {
  }


  logout(): void {
    this.store.dispatch(logout());
  }

  handleError(event: any): void {
    event.target.src = environment.defaultUserPictureUrl;
  }
}
