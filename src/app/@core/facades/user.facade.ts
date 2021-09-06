
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '@store/user/actions';
import { UserSelectors } from '@store/user/selectors';


@Injectable({
    providedIn: 'root'
})
export class UserFacade {

    public profile$ = this.store.select(UserSelectors.profile);
    public countCustomers$ = this.store.select(UserSelectors.countCustomers);
    constructor(private store: Store) {

    }

    public loadProfile(): void {
        this.store.dispatch(UserActions.checkProfile());
    }

    public loadNotifications(): void {
        this.store.dispatch(UserActions.loadNotifications());
    }
}
