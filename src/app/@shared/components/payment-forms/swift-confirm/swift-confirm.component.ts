import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayFormsActions } from '@store/payments/forms/actions';
import { PayFormsSelectors } from '@store/payments/forms/selectors';
import { required } from '@store/shared';

@Component({
  selector: 'app-swift-confirm',
  templateUrl: './swift-confirm.component.html',
  styleUrls: ['./swift-confirm.component.scss'],
})
export class SwiftConfirmComponent implements OnInit {
  constructor(private store: Store) {}
  swift$ = this.store.select(PayFormsSelectors.swift).pipe(required);
  isLoading$ = this.store.select(PayFormsSelectors.createLoading);

  ngOnInit(): void {}

  toForm(ignore: boolean): void {
    if (ignore) {
      return;
    }
    this.store.dispatch(PayFormsActions.setProgress({ progress: 'form' }));
  }
}
