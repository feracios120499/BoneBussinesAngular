import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RouteActions } from '@store/route/actions';

@Component({
  selector: 'app-cards-header',
  templateUrl: './cards-header.component.html',
  styleUrls: ['./cards-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsHeaderComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  goTo(route: string): void {
    this.store.dispatch(RouteActions.routeTo({ route }));
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
