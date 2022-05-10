import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RouteActions } from '@store/route/actions';

@Component({
  selector: 'payments-header',
  templateUrl: './payments-header.component.html',
  styleUrls: ['./payments-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsHeaderComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  goTo(route: string): void {
    this.store.dispatch(RouteActions.routeTo({ route }));
  }

  isActive(route: string): boolean {
    return this.router.url.indexOf(route) >= 0;
  }
}
