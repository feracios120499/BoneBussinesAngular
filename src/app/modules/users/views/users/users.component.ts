import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
// import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  // FOR DEMO PURPOSE ONLY:
  isLoadingUsers$ = of(false) /* .pipe(delay(3000)) */;
}
