import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-skeleton',
  templateUrl: './user-skeleton.component.html',
  styleUrls: ['./user-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
