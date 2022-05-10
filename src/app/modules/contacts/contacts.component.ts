import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { PublicSelectors } from '@store/public/selectors';
import { required } from '@store/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  callCenterWork$: Observable<{ from: string | undefined; to: string | undefined }> = this.store.select(
    PublicSelectors.callCenterWork
  );
  callCenterPhones$: Observable<string[]> = required(this.store.select(PublicSelectors.callCenterPhones));
  callCenterPhonesLocal$: Observable<string[]> = required(this.store.select(PublicSelectors.callCenterPhonesLocal));
  ecpSupportPhones$: Observable<string[]> = required(this.store.select(PublicSelectors.ecpSupportPhones));
  ecpSupportPhonesLocal$: Observable<string[]> = required(this.store.select(PublicSelectors.ecpSupportPhonesLocal));

  constructor(private store: Store) {}
}
