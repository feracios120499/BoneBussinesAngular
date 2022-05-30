import { Component, HostBinding, Input } from '@angular/core';

import { BaseSkeletonComponent } from '@directives/skeleton/base-skeleton.component';

@Component({
  selector: 'b1-more-button',
  templateUrl: './b1-more-button.component.html',
  styleUrls: ['./b1-more-button.component.scss'],
  inputs: ['skeletonMode'],
})
export class B1MoreButtonComponent extends BaseSkeletonComponent {
  @Input() bordered: boolean = false;
  @HostBinding('class.b1-rotate-90') @Input() horizontal: boolean = false;
}
