import { Injectable } from '@angular/core';
import { Profile } from '@models/profile.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Observable } from 'rxjs';
import { BaseUserService } from './base-user.service';
import { DemoUserService } from './demo-user.service';
import { HttpUserService } from './http-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements BaseUserService {
  /**
   *
   */
  private userService: BaseUserService;
  constructor(demoUserService: DemoUserService, httpUserService: HttpUserService, private store: Store) {
    this.userService = httpUserService;

    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.userService = demoUserService;
      } else {
        this.userService = httpUserService;
      }
    });
  }

  getProfile(): Observable<Profile> {
    return this.userService.getProfile();
  }
}
