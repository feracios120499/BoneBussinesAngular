import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { B1PaymentModalComponent } from 'src/app/@shared/components/b1-payment-modal/b1-payment-modal.component';
import { SharedActions } from './actions';


@Injectable()
export class SharedEffects {
    constructor(private actions$: Actions, private modalService: NgbModal) { }

    showModal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SharedActions.showPayment),
            tap((action) => {
                const modalRef = this.modalService.open(B1PaymentModalComponent, { windowClass: 'payment-modal' });
            })
        ),
        { dispatch: false });
}
