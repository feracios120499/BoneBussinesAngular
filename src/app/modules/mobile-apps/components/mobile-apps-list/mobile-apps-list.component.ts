import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { Store } from '@ngrx/store';
import { PublicSelectors } from '@store/public/selectors';
import { required } from '@store/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobile-apps-list',
  templateUrl: './mobile-apps-list.component.html',
  styleUrls: ['./mobile-apps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileAppsListComponent {
  mobileAppLinks$: Observable<MobileAppLinks> = required(this.store.select(PublicSelectors.mobileAppLinks));

  constructor(private store: Store) {}
}
