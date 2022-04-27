import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { ActionButton } from '@ui/b1-dropdown/b1-dropdown.component';
import { SharedActions } from '@store/shared/actions';
import { CorrespondentsActions } from '@store/correspondents/actions';
import { PaymentAccount } from '@models/payment-account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correspondent-item',
  templateUrl: './correspondent-item.component.html',
  styleUrls: ['./correspondent-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'correspondent-item',
  },
})
export class CorrespondentItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() correspondent!: Correspondent;

  constructor(private store: Store, private translateService: TranslateService, private router: Router) {
    super();
  }

  get actionButtons(): ActionButton[] {
    return [
      {
        translate: 'components.pay.correspondents.createPayment',
        clickHandler: this.onCorrespondentCreatePayment.bind(this, this.correspondent),
        icon: 'country',
      },
      {
        translate: 'components.pay.correspondents.createPaymentAuto',
        clickHandler: this.onCorrespondentCreateRegularPayment.bind(this, this.correspondent),
        // TODO:
        icon: 'country',
      },
      {
        translate: 'actions.delete',
        clickHandler: this.onCorrespondentDelete.bind(this, this.correspondent),
        icon: 'delete',
        danger: true,
      },
    ];
  }

  ngOnInit(): void {
    this.checkRequiredProps(['correspondent']);
  }

  onCorrespondentCreatePayment(correspondent: Correspondent): void {
    const { name, accNumber, taxCode } = correspondent;
    const recipient = { name, accNumber, taxCode } as PaymentAccount;
    this.store.dispatch(SharedActions.setCreatePartialPayment({ payment: { recipient } }));
    this.router.navigate(['/payments', 'create', 'within-country']);
  }

  onCorrespondentCreateRegularPayment(correspondent: Correspondent): void {
    console.log('Regular payment is created with correspondent: ', correspondent);
  }

  onCorrespondentDelete(correspondent: Correspondent): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: `${this.translateService.instant('components.pay.correspondents.deletingCofirm')} ${
            correspondent.name
          }?`,
          callback: () => this.store.dispatch(CorrespondentsActions.deleteCorrespondentRequest(correspondent.id)),
        },
      })
    );
  }
}
