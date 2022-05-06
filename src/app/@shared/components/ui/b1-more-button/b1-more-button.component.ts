import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'b1-more-button',
  templateUrl: './b1-more-button.component.html',
  styleUrls: ['./b1-more-button.component.scss'],
})
export class B1MoreButtonComponent {
  @Input() bordered: boolean = false;
  @HostBinding('class.b1-rotate-90') @Input() horizontal: boolean = false;
}
