import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { BaseControlArrayComponent } from '../base-control-array.component';

@Component({
  selector: 'b1-switcher-list',
  templateUrl: './b1-switcher-list.component.html',
  styleUrls: ['./b1-switcher-list.component.scss'],
  host: {
    class: 'b1-input',
  },
})
export class B1SwitcherListComponent
  extends withRequiredPropsCheck(BaseControlArrayComponent)
  implements OnInit, AfterViewInit
{
  @Input() labels!: string[];

  @ViewChild('labelRef') private labelRef!: ElementRef<HTMLLabelElement>;

  ngOnInit(): void {
    this.checkRequiredProps(['labels']);
  }

  ngAfterViewInit(): void {
    if (!this.labelRef.nativeElement.textContent) {
      throw new Error('Label text is required!');
    }
  }
}
