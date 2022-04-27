import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-skeleton',
  templateUrl: './user-skeleton.component.html',
  styleUrls: ['./user-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'user-skeleton',
  },
})
export class UserSkeletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
