import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  selector: 'app-contacts-phone-list',
  templateUrl: './contacts-phone-list.component.html',
  styleUrls: ['./contacts-phone-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPhoneListComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() phones!: string[];
  @Input() comment!: string;

  ngOnInit(): void {
    this.checkRequiredProps(['phones', 'comment']);
  }
}
