import { loadNotifications } from '@actions/user.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserFacade } from '@core/facades/user.facade';
import { Store } from '@ngrx/store';
import { isCollapsedSelector } from '@selectors/settings.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss']
})
export class AuthorizedLayoutComponent implements OnInit, OnDestroy {

  private profile$ = this.userFacade.profile$;
  private profileSubscription$!: Subscription;
  public isCollapsed$ = this.store.select(isCollapsedSelector);
  constructor(private userFacade: UserFacade, private store: Store) { }

  ngOnInit(): void {
    this.userFacade.loadProfile();
    this.profileSubscription$ = this.profile$.subscribe((profile) => {
      if (profile) {
        this.userFacade.loadNotifications();
      }
    });
  }

  ngOnDestroy(): void {
    this.profileSubscription$.unsubscribe();
  }

}
