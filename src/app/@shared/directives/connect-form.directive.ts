import { AfterViewInit, Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { currentTabSelector } from '@selectors/acct.selectors';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';

@Directive({
    selector: '[connectForm]'
})
export class ConnectFormDirective implements AfterViewInit, OnDestroy {
    @Output() formChange: EventEmitter<any> = new EventEmitter<any>();
    @Input() debounce = 300;
    @Input() value: Observable<any> | undefined;
    formChangeSubscription: Subscription | undefined;

    constructor(private formGroupDirective: FormGroupDirective, private store: Store) {

    }

    ngAfterViewInit(): void {
        if (!!this.formChange) {
            this.formChangeSubscription = this.formGroupDirective.form.valueChanges.pipe(
                debounceTime(this.debounce)).subscribe((value: any) => {
                    this.formChange?.emit(value);
                });
        }
        if (!!this.value) {
            this.value.pipe(take(1)).subscribe(value => this.formGroupDirective.form.patchValue(value));
        }
    }

    ngOnDestroy(): void {
        this.formChangeSubscription!.unsubscribe();
    }

}
