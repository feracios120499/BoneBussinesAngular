import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'b1-cell-container',
  templateUrl: './b1-cell-container.component.html',
  styleUrls: ['./b1-cell-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1CellContainerComponent {
  @Input() negative = false;
}
