import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { MenuSelectors } from '@store/menu/selectors';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'b1-page-loader',
  templateUrl: './b1-page-loader.component.html',
  styleUrls: ['./b1-page-loader.component.scss'],
})
export class B1PageLoaderComponent implements OnInit {
  constructor(private store: Store) {}

  loading$ = this.store
    .select(AppSelectors.pageLoader)
    .pipe(switchMap((select) => (select ? this.store.select(select) : of(false))));
  isCollapsed$ = this.store.select(MenuSelectors.isCollapsed);

  ngOnInit(): void {
    this.loading$.subscribe(console.log);
  }
}
