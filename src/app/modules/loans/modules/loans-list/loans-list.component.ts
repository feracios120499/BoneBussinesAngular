import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Loan } from '@modules/loans/models/loan.model';
import { LoansActions } from '@modules/loans/store/actions';
import { LoansSelectors } from '@modules/loans/store/selectors';
import { ResizeService } from '@services/resize.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(LoansSelectors.isLoading);
  isInitialLoading$: Observable<boolean> = this.store.select(LoansSelectors.isInitialLoadingLoans);
  loans$: Observable<Loan[]> = this.store.select(LoansSelectors.loanList);
  filterTerm$: Observable<string> = this.store.select(LoansSelectors.filterTerm);
  isMobile$ = this.resizeService.isMobile$;

  constructor(private store: Store, private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.store.dispatch(LoansActions.resetLoanFilter());
  }
}
