import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { countNotificationsSelector } from '@selectors/user.selectors';

@Component({
  selector: 'header-notifications',
  templateUrl: './header-notifications.component.html',
  styleUrls: ['./header-notifications.component.scss', './../../header.component.scss']
})
export class HeaderNotificationsComponent implements OnInit {

  constructor(private store: Store) { }

  public countNotifications$ = this.store.select(countNotificationsSelector);

  ngOnInit(): void {
  }

}
