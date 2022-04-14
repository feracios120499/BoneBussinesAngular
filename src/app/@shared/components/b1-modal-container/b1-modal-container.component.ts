import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  selector: 'b1-modal-container',
  templateUrl: './b1-modal-container.component.html',
  styleUrls: ['./b1-modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1ModalContainerComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  @Input() isLoading$!: Observable<boolean>;

  constructor(public activeModal: NgbActiveModal) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['isLoading$']);
  }
}
