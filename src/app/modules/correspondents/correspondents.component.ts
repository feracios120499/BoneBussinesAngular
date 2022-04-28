import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CorrespondentsSelectors } from '@store/correspondents/selectors';
import { CorrespondentsActions } from '@store/correspondents/actions';

@Component({
  selector: 'app-correspondents',
  templateUrl: './correspondents.component.html',
  styleUrls: ['./correspondents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(CorrespondentsSelectors.isLoadingCorrespondents);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CorrespondentsActions.loadCorrespondentsRequest());
  }
}
