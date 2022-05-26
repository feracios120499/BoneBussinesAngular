import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ResizeService } from '@services/resize.service';
import { Overdraft } from '@modules/loans/models/overdraft.model';
import { OverdraftsActions } from '../../store/actions';
import { OverdraftsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-overdrafts-list',
  templateUrl: './overdrafts-list.component.html',
  styleUrls: ['./overdrafts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverdraftsListComponent implements OnInit {
  isInitialLoading$: Observable<boolean> = this.store.select(OverdraftsSelectors.isInitialLoadingOverdrafts);
  overdrafts$: Observable<Overdraft[]> = this.store.select(OverdraftsSelectors.overdraftList);
  filterTerm$: Observable<string> = this.store.select(OverdraftsSelectors.filterTerm);
  isMobile$ = this.resizeService.isMobile$;

  constructor(private store: Store, private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.store.dispatch(OverdraftsActions.resetOverdraftFilter());
  }
}
