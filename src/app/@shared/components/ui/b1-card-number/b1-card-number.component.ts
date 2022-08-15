import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'b1-card-number',
  templateUrl: './b1-card-number.component.html',
  styleUrls: ['./b1-card-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1CardNumberComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  @Input() cardNumber!: string;
  @Input() cardNumberClass: string = '';

  ngOnInit(): void {}
}
