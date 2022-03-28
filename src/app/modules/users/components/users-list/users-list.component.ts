import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { ResizeService } from '@services/resize.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'users-list',
  },
})
export class UsersListComponent {
  @Input() isLoading = false;
  selectedItem?: number;

  constructor(private store: Store, private resizeService: ResizeService) {}

  // FOR DEMO PURPOSE ONLY:
  users$ = of([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
  isMobile$ = this.resizeService.isMobile$;

  toDetail(user: { id: number }, index: number): void {
    console.log('user selected: ', user);
    this.selectedItem = index;
  }
}
