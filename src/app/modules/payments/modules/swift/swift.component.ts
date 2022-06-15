import { Component, OnInit } from '@angular/core';
import { AcctSelectors } from '@modules/accounts/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-swift',
  templateUrl: './swift.component.html',
  styleUrls: ['./swift.component.scss'],
})
export class SwiftComponent implements OnInit {
  constructor(private store: Store) {}

  senderAccounts$ = this.store.select(AcctSelectors.swiftSenderAccounts);
  ngOnInit(): void {}
}
