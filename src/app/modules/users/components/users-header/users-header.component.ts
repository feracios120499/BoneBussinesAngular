import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
