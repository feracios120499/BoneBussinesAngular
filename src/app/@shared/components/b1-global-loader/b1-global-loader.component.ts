import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { globalLoaderSelector } from '@selectors/app.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'b1-global-loader',
  templateUrl: './b1-global-loader.component.html',
  styleUrls: ['./b1-global-loader.component.scss']
})
export class B1GlobalLoaderComponent implements OnInit {

  public loading$ = this.store.select(globalLoaderSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {

  }
}
