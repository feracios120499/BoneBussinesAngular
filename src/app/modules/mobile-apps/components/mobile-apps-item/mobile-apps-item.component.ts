import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  selector: 'app-mobile-apps-item',
  templateUrl: './mobile-apps-item.component.html',
  styleUrls: ['./mobile-apps-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileAppsItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() link!: string;
  @Input() svgName!: string;

  ngOnInit(): void {
    this.checkRequiredProps(['link', 'svgName']);
  }
}
