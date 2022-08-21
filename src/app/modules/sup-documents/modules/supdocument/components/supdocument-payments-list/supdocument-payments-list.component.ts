import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { Observable } from 'rxjs';
import { SupDocumentDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-supdocument-payments-list',
  templateUrl: './supdocument-payments-list.component.html',
  styleUrls: ['./supdocument-payments-list.component.scss'],
})
export class SupdocumentPaymentsListComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  payments$ = this.store.select(SupDocumentDetailsSelectors.filteredPayments);
  isLoading$ = this.store.select(SupDocumentDetailsSelectors.isLoadingPayments);
  filterTerm$: Observable<string> = this.store.select(SupDocumentDetailsSelectors.filterTerm);
  isMobile$ = this.resizeService.isMobile$;

  ngOnInit(): void {}

  onPaymentClick(): void {
    console.log('open payment');
  }

  // trackId(index: number, turnover: UiTurnovers): string | undefined {
  //   return turnover ? turnover.id : undefined;
  // }
}
