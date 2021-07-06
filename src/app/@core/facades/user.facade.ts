import { checkProfile, loadNotifications } from '@actions/user.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { countCustomersSelector, profileSelector } from '@selectors/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class UserFacade {

    public profile$ = this.store.select(profileSelector);
    public countCustomers$ = this.store.select(countCustomersSelector);
    constructor(private store: Store) {

    }

    public loadProfile(): void {
        console.log('load profile');
        this.store.dispatch(checkProfile());
    }

    public loadNotifications(): void {
        this.store.dispatch(loadNotifications());
    }
}
