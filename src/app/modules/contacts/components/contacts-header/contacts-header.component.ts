import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contacts-header',
  templateUrl: './contacts-header.component.html',
  styleUrls: ['./contacts-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
