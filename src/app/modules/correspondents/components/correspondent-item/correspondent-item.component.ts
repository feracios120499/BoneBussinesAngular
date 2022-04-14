import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-correspondent-item',
  templateUrl: './correspondent-item.component.html',
  styleUrls: ['./correspondent-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondentItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
