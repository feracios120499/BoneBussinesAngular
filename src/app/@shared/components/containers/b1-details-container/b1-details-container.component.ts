import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'b1-details-container',
  templateUrl: './b1-details-container.component.html',
  styleUrls: ['./b1-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1DetailsContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
