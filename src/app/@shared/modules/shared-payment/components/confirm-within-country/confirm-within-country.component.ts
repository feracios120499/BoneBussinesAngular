import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WithinCountryPaymentSelectors } from '@store/payments/within-country-payment/selectors';
import { required } from '@store/shared';

@Component({
  selector: 'confirm-within-country',
  templateUrl: './confirm-within-country.component.html',
  styleUrls: ['./confirm-within-country.component.scss']
})
export class ConfirmWithinCountryComponent implements OnInit {

  constructor(private store: Store) { }


  payment$ = this.store.select(WithinCountryPaymentSelectors.payment).pipe(required);
  ngOnInit(): void {
  }

}
