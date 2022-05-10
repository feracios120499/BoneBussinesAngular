import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styleUrls: ['./contacts-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
