import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'b1-global-loader',
  templateUrl: './b1-global-loader.component.html',
  styleUrls: ['./b1-global-loader.component.scss']
})
export class B1GlobalLoaderComponent implements OnInit {
  public loaded$ = this.store.select(AppSelectors.globalLoader).pipe(map(p => !p));

  constructor(private store: Store) { }

  ngOnInit(): void {

  }
}
