import { Component, Input, OnInit } from '@angular/core';
import { PaymentStatus } from '@models/payments/payment-status.model';
import { Store } from '@ngrx/store';
import { PayActions } from '@store/payments/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss']
})
export class PaymentResultComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('status') status$!: Observable<PaymentStatus>;

  constructor(private store: Store) {
    // this.status.subscribe()
    // this.store.select(this.selector).subscribe((status) => this.status = status);
  }

  ngOnInit(): void {

  }

  sign(id: string): void {
    this.store.dispatch(PayActions.signPayment(id));
  }
}
