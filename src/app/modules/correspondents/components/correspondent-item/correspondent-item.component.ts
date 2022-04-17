import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { Correspondent } from '@models/correspondents/correspondent.model';
import { ActionButton } from '@ui/b1-dropdown/b1-dropdown.component';

@Component({
  selector: 'app-correspondent-item',
  templateUrl: './correspondent-item.component.html',
  styleUrls: ['./correspondent-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'correspondent-item',
  },
})
export class CorrespondentItemComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  @Input() correspondent!: Correspondent;

  constructor(
    private store: Store,
    private translateService: TranslateService
  ) {
    super();
  }

  get actionButtons(): ActionButton[] {
    return [
      {
        translate: 'components.pay.correspondents.createPayment',
        clickHandler: this.onCorrespondentCreatePayment.bind(
          this,
          this.correspondent
        ),
        icon: 'country',
      },
      {
        translate: 'components.pay.correspondents.createPaymentAuto',
        clickHandler: this.onCorrespondentCreateRegularPayment.bind(
          this,
          this.correspondent
        ),
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

  private onCorrespondentCreatePayment(correspondent: Correspondent): void {
    console.log('Payment is created with correspondent: ', correspondent);
  }

  private onCorrespondentCreateRegularPayment(
    correspondent: Correspondent
  ): void {
    console.log(
      'Regular payment is created with correspondent: ',
      correspondent
    );
  }

  private onCorrespondentDelete(correspondent: Correspondent): void {
    console.log('Correspondent is deleted: ', correspondent);
    // this.store.dispatch(
    //   SharedActions.showConfirm({
    //     config: {
    //       text: `${this.translateService.instant(
    //         'components.admin.deleteConfirm'
    //       )} ${correspondent.displayName}?`,
    //       callback: () =>
    //         this.store.dispatch(CorrespondentsActions.deletecorrespondentRequest(correspondent.id)),
    //     },
    //   })
    // );
  }
}
