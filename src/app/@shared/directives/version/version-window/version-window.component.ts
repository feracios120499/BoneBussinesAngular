import { Component, OnInit, ChangeDetectionStrategy, HostBinding, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { fadeOut } from '@animations/fade-out.animation';
import { Version } from '@models/version.model';
import { PublicSelectors } from '@store/public/selectors';
import { required } from '@store/shared';
import { PublicActions } from '@store/public/actions';
import { filter, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-version-window',
  templateUrl: './version-window.component.html',
  styleUrls: ['./version-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'version-window',
  },
  animations: [fadeOut()],
})
export class VersionWindowComponent implements OnInit, OnDestroy {
  version$: Observable<Version> = required(this.store.select(PublicSelectors.watchVersion));

  @HostBinding('@fadeOut') fadeOutAnimation = true;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(PublicSelectors.watchVersion)
      .pipe(
        take(1),
        filter((version: Version | undefined) => !version),
        switchMap(() => required(this.store.select(PublicSelectors.currentVersion)))
      )
      .subscribe((code: string) => {
        this.getVersion(code);
      });
    // ========================
    // FOR DEMO PURPOSE ONLY:
    // this.getVersion('1.8.0');
  }

  getVersion(code: string): void {
    this.store.dispatch(PublicActions.loadVersionRequest(code));
  }

  ngOnDestroy(): void {
    this.getVersion('1.8.0');
  }
}
