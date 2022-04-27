import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedSelectors } from '@store/shared/selectors';
import dayjs, { Dayjs } from 'dayjs';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { maxDateValidator } from 'src/app/@shared/validators/max-date.validator';
import { minDateValidator } from 'src/app/@shared/validators/min-date.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'payment-dates-form',
  templateUrl: './payment-dates-form.component.html',
  styleUrls: ['./payment-dates-form.component.scss']
})
export class PaymentDatesFormComponent implements OnInit, OnDestroy {


  minDocumentDate!: Dayjs;
  maxDocumentDate!: Dayjs;

  minValueDate!: Dayjs;
  maxValueDate!: Dayjs;

  documentDateControl: FormControl;
  valueDateControl: FormControl;

  @Input() paymentForm!: FormGroup;

  bankDate$ = this.store.select(SharedSelectors.bankDate);
  bankDateSubscription!: Subscription;
  documentDateSubscription!: Subscription;

  constructor(private store: Store, private detect: ChangeDetectorRef) {
    this.documentDateControl = new FormControl(this.toDate(dayjs()));
    this.valueDateControl = new FormControl(this.toDate(dayjs()));
  }


  ngOnInit(): void {


    this.paymentForm.addControl('documentDate', this.documentDateControl);
    this.paymentForm.addControl('valueDate', this.valueDateControl);

    const documentDate$ = this.documentDateControl.valueChanges;

    this.bankDateSubscription = this.bankDate$.subscribe(bankDate => {
      if (bankDate) {
        this.minDocumentDate = bankDate.clone();
        this.maxDocumentDate = bankDate.clone().add(environment.payments.dates.documentDateMaxDaysFromBankDate, 'day');
        this.detect.detectChanges();
        this.documentDateControl.setValidators([
          Validators.required,
          minDateValidator(this.minDocumentDate),
          maxDateValidator(this.maxDocumentDate)
        ]);

        if (this.documentDateControl.value < this.minDocumentDate) {
          this.documentDateControl.patchValue(this.toDate(this.minDocumentDate));
        }
        else if (this.documentDateControl.value > this.maxDocumentDate) {
          this.documentDateControl.patchValue(this.toDate(this.maxDocumentDate));
        }
        this.documentDateControl.updateValueAndValidity();
        this.detect.detectChanges();
      }
    });

    this.documentDateSubscription = documentDate$.pipe(filter(value => !!value)).subscribe(documentDate => {
      this.minValueDate = documentDate.clone();
      this.maxValueDate = documentDate.clone().add(environment.payments.dates.valueDateMaxDaysFromDocumentDate, 'day');
      this.detect.detectChanges();
      this.valueDateControl.setValidators([
        Validators.required,
        minDateValidator(this.minValueDate),
        maxDateValidator(this.maxValueDate)
      ]);

      if (this.minValueDate.isBefore(this.valueDateControl.value) || this.maxValueDate.isAfter(this.valueDateControl.value)) {
        this.valueDateControl.patchValue(this.toDate(this.minValueDate));
      }
      this.valueDateControl.updateValueAndValidity();
      this.detect.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.documentDateSubscription?.unsubscribe();
    this.bankDateSubscription?.unsubscribe();
  }

  toDate(dateTime: Dayjs): Dayjs {
    return dayjs(dateTime.format('YYYY-MM-DD'), 'YYYY-MM-DD');
  }

}
