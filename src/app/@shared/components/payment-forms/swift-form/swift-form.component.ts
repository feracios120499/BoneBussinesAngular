import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModelControl } from '@b1-types/model-controls.type';
import { SwiftForm } from '@models/payments/swift-form.model';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-swift-form',
  templateUrl: './swift-form.component.html',
  styleUrls: ['./swift-form.component.scss'],
})
export class SwiftFormComponent implements OnInit {
  constructor() {
    const contols: ModelControl<SwiftForm> = {
      amount: this.amountControl,
      number: this.docNumberControl,
      other: this.otherControl,
      paymentFee: this.paymentFeeControl,
      purpose: this.purposeControl,
      typePay: this.typePayControl,
    };

    this.subscriptions.push(
      this.docNumberAutoControl.valueChanges.pipe(this.docNumberAutoChange.bind(this)).subscribe()
    );
  }

  subscriptions: Subscription[] = [];

  amountControl = new FormControl(0, [Validators.required, Validators.min(1)]);

  docNumberAutoControl = new FormControl(true, Validators.required);

  // DOCUMENT NUMBER
  docNumberControl = new FormControl('');
  docNumberMaxLength = 10;
  docNumberValidators = [Validators.required, Validators.maxLength(this.docNumberMaxLength)];

  otherControl = new FormControl('', [Validators.maxLength(250)]);

  paymentFeeControl = new FormControl('OUR', [Validators.required]);

  purposeControl = new FormControl('', [Validators.required, Validators.maxLength(140)]);

  typePayControl = new FormControl(0, [Validators.required]);

  private docNumberAutoChange(source$: Observable<boolean>): Observable<boolean> {
    return source$.pipe(
      tap((docNumberAuto) => {
        if (!docNumberAuto) {
          this.docNumberControl.addValidators(this.docNumberValidators);
        } else {
          this.docNumberControl.removeValidators(this.docNumberValidators);
        }

        this.docNumberControl.setValue('');
        this.docNumberControl.markAsUntouched();
        this.docNumberControl.updateValueAndValidity();
      })
    );
  }

  ngOnInit(): void {}
}
