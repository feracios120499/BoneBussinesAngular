import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'b1-global-loader',
  templateUrl: './b1-global-loader.component.html',
  styleUrls: ['./b1-global-loader.component.scss']
})
export class B1GlobalLoaderComponent implements OnInit, OnDestroy {

  loading = false;
  eventsSubscription$!: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.eventsSubscription$ = this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
        console.log('start load');
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loading = false;
        console.log('end load');
      }
    });

  }

  ngOnDestroy(): void {
    this.eventsSubscription$.unsubscribe();
  }

}
