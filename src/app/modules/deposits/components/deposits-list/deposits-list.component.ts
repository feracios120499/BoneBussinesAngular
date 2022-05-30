import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ResizeService } from '@services/resize.service';
import { Deposit } from '@modules/deposits/models/deposit.model';
import { DepositsActions } from '@modules/deposits/store/actions';
import { DepositsSelectors } from '@modules/deposits/store/selectors';

@Component({
  selector: 'app-deposits-list',
  templateUrl: './deposits-list.component.html',
  styleUrls: ['./deposits-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositsListComponent implements OnInit {
  isInitialLoading$: Observable<boolean> = this.store.select(DepositsSelectors.isInitialLoadingDeposits);
  deposits$: Observable<Deposit[]> = this.store.select(DepositsSelectors.depositList);
  filterTerm$: Observable<string> = this.store.select(DepositsSelectors.filterTerm);
  isMobile$ = this.resizeService.isMobile$;

  constructor(private store: Store, private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.store.dispatch(DepositsActions.resetDepositFilter());
  }
}
