import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { Correspondent } from '@models/correspondents/correspondent.model';
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

  ngOnInit(): void {
    this.checkRequiredProps(['correspondent']);
  }

  onCorrespondentCreatePayment(): void {
    const { name, accNumber, taxCode } = this.correspondent;
    const recipient = { name, accNumber, taxCode } as PaymentAccount;
    this.store.dispatch(SharedActions.setCreatePartialPayment({ payment: { recipient } }));
    this.router.navigate(['/payments', 'create', 'within-country']);
  }

  onCorrespondentCreateRegularPayment(): void {
    console.log('Regular payment is created with correspondent: ', this.correspondent);
  }

  onCorrespondentDelete(): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: `${this.translateService.instant('components.pay.correspondents.deletingCofirm')} ${
            this.correspondent.name
          }?`,
          callback: () => this.store.dispatch(CorrespondentsActions.deleteCorrespondentRequest(this.correspondent.id)),
        },
      })
    );
  }
}
