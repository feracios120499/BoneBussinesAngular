import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersActionsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onUserAdd(): void {
    console.log('User add clicked!');
  }
}
