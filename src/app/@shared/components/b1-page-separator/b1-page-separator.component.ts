import { Component, Input } from '@angular/core';

type SizeType = 'small' | 'medium' | 'large' | 'large';

const BOTTOM_MARGINS: Readonly<{ [key in SizeType]: number }> = {
  small: 0,
  medium: 32,
  large: 60,
};

@Component({
  selector: 'b1-page-separator',
  templateUrl: './b1-page-separator.component.html',
  styleUrls: ['./b1-page-separator.component.scss'],
})
export class B1PageSeparatorComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'large';

  get margin(): number {
    return BOTTOM_MARGINS[this.size];
  }
}
