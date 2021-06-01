import { checkProfile } from '@actions/user.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileSelector } from '@selectors/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class UserFacade {

    public profile$ = this.store.select(profileSelector);
    constructor(private store: Store) {

    }

    public loadProfile(): void {
        console.log('load profile');
        this.store.dispatch(checkProfile());
    }
}
