import { Component, ChangeDetectorRef, Optional, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import {
  take,
  filter,
  switchMap,
  startWith,
  takeUntil,
  skip,
} from 'rxjs/operators';
import { MemoizedSelector, Store } from '@ngrx/store';

import { withDestroy } from '@mixins/with-destroy.mixin';
import { TypedAction } from '@ngrx/store/src/models';

type TStatus = 'PENDING' | 'VALID' | 'INVALID' | 'DISABLED';
type TError = string | undefined;

@Component({
  template: ``,
})
export abstract class BaseFormComponent
  extends withDestroy()
  implements OnInit
{
  abstract formGroup: FormGroup;
  abstract isLoading$: Observable<boolean>;
  abstract errorMessage: string;
  private isSubmitted: boolean = false;

  constructor(
    protected store: Store,
    @Optional() protected changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.isLoading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoading: boolean) => {
        isLoading ? this.disableForm() : this.enableForm();
      });
  }

  protected submit(
    action: TypedAction<any>,
    errorSelector: MemoizedSelector<Object, TError>
  ): void {
    if (this.isSubmitted || this.formGroup.pending) {
      return;
    }
    this.formGroup.markAllAsTouched();
    this.errorMessage = '';
    this.updateTreeValidity(this.formGroup);

    let submitObs: Observable<string> | undefined;

    if (this.formGroup.pending) {
      submitObs = this.formGroup.statusChanges.pipe(
        takeUntil(this.destroy$),
        startWith(this.formGroup.status),
        skip(1),
        take(1),
        filter((status: TStatus) => {
          return status === 'VALID';
        }),
        switchMap(() => {
          return this.sendRequest(action, errorSelector);
        })
      );
    } else if (this.formGroup.valid) {
      submitObs = this.sendRequest(action, errorSelector);
    }

    submitObs?.subscribe({
      error: (error: string) => {
        this.errorMessage = error;
        this.updateTreeValidity(this.formGroup);
        this.enableForm();
        this.changeDetectorRef?.markForCheck();
      },
    });
  }

  protected updateTreeValidity(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = (group.controls as any)[key];
      if (
        abstractControl instanceof FormGroup ||
        abstractControl instanceof FormArray
      ) {
        this.updateTreeValidity(abstractControl);
      } else {
        abstractControl.updateValueAndValidity();
      }
    });
  }

  private sendRequest(
    action: TypedAction<any>,
    errorSelector: MemoizedSelector<Object, TError>
  ): Observable<string> {
    const requestObs: Observable<string> = this.store
      .select(errorSelector)
      .pipe(
        filter((error: TError) => {
          return !!error;
        }),
        take(1),
        switchMap((error: TError) => {
          return throwError(error);
        })
      );
    this.store.dispatch(action);
    return requestObs;
  }

  private enableForm(): void {
    this.isSubmitted = false;
    this.formGroup.enable();
  }

  private disableForm(): void {
    this.isSubmitted = true;
    this.formGroup.disable();
  }
}
