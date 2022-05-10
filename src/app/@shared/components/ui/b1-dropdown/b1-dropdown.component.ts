import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'b1-dropdown',
  templateUrl: './b1-dropdown.component.html',
  styleUrls: ['./b1-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1DropdownComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() label!: string;
  @Input() menuWidth = 'auto';
  @Input() scopeSelector = '.b1-page-data';
  @Input() isDisabled = false;

  @ViewChild('dropdown', { static: true }) dropdown!: NgbDropdown;

  ngOnInit(): void {
    this.checkRequiredProps(['label']);
  }

  public open(): void {
    !this.isDisabled && this.dropdown.open();
  }

  public close(): void {
    this.dropdown.close();
  }
}
