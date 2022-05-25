import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Params } from '@angular/router';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

interface Link {
  url: (string | number | Params)[] | string;
  label: string;
}

@Component({
  selector: 'b1-page-menu',
  templateUrl: './b1-page-menu.component.html',
  styleUrls: ['./b1-page-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1PageMenuComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() links!: Link[];

  ngOnInit(): void {
    this.checkRequiredProps(['links']);
  }
}
