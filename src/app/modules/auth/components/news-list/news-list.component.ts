import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { News } from '@models/news.model';
import { Store } from '@ngrx/store';
import { PublicActions } from '@store/public/actions';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() newsList!: News[];

  constructor(public sanitizer: DomSanitizer, private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['newsList']);
  }

  close(id: number): void {
    this.store.dispatch(PublicActions.removeNewsItem({ id }));
  }
}
