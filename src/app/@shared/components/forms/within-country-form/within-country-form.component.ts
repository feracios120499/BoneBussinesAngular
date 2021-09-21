import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedSelectors } from '@store/shared/selectors';
import dayjs, { Dayjs } from 'dayjs';
import { combineLatest, merge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { documentDateValidator } from 'src/app/@shared/validators/document-date.validator';
import { maxDateValidator } from 'src/app/@shared/validators/max-date.validator';
import { minDateValidator } from 'src/app/@shared/validators/min-date.validator';
import { valueDateValidator } from 'src/app/@shared/validators/value-date.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'within-country-form',
  templateUrl: './within-country-form.component.html',
  styleUrls: ['./within-country-form.component.scss']
})
export class WithinCountryFormComponent implements OnInit {


  minValueDate!: Dayjs;
  maxValueDate!: Dayjs;
  constructor(private store: Store) {

    const documentDateControl = new FormControl(dayjs(), [], documentDateValidator(this.bankDate$));
    const documentDate$ = documentDateControl.valueChanges;

    const valueDateControl = new FormControl(dayjs());
    const valueDate$ = valueDateControl.valueChanges;

    documentDate$.subscribe((documentDate) => {
      this.minValueDate = documentDate.clone();
      this.maxValueDate = documentDate.clone().add(environment.payments.dates.valueDateMaxDaysFromDocumentDate, 'days');
      valueDateControl.setValidators([minDateValidator(this.minValueDate), maxDateValidator(this.maxValueDate)]);
      valueDateControl.updateValueAndValidity();
    });

    this.formGroup = new FormGroup({
      docNumberAuto: new FormControl(true, Validators.required),
      documentDate: documentDateControl,
      valueDate: valueDateControl
    });

    this.bankDateSubscription = this.bankDate$.subscribe((bankDate) => {
      if (bankDate) {
        this.formGroup.setValue({ ...this.formGroup.value, documentDate: bankDate });
      }
    });
  }

  get docNumberAuto(): AbstractControl | null {
    return this.formGroup.get('docNumberAuto');
  }

  get documentDate(): AbstractControl | null {
    return this.formGroup.get('documentDate');
  }

  formGroup: FormGroup;
  bankDate$ = this.store.select(SharedSelectors.bankDate);
  bankDateSubscription: Subscription;

  ngOnInit(): void {

  }
}
