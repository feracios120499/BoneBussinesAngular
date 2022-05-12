import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mobile-apps-header',
  templateUrl: './mobile-apps-header.component.html',
  styleUrls: ['./mobile-apps-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileAppsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
