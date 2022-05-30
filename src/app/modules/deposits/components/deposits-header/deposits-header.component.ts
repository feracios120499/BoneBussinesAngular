import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-deposits-header',
  templateUrl: './deposits-header.component.html',
  styleUrls: ['./deposits-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
