import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-styled-skeleton',
  templateUrl: './card-styled-skeleton.component.html',
  styleUrls: ['./card-styled-skeleton.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardStyledSkeletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
