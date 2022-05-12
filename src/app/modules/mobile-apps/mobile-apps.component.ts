import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mobile-apps',
  templateUrl: './mobile-apps.component.html',
  styleUrls: ['./mobile-apps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileAppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
