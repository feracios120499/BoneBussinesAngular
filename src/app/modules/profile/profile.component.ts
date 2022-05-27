import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  tabs = [
    {
      label: 'components.profile.PROFILE',
      icon: 'user',
      type: 'profile',
    },
    {
      label: 'components.profile.SECURITY',
      icon: 'shield',
      type: 'security',
    },
    {
      label: 'components.profile.devices',
      icon: 'devices',
      type: 'devices',
    },
  ];

  currentTab = this.tabs[0];
  ngOnInit(): void {}

  selectTab(tab: any): void {
    this.currentTab = tab;
  }
}
