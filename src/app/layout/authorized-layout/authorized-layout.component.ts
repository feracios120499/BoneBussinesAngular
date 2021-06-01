import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@core/facades/user.facade';

@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss']
})
export class AuthorizedLayoutComponent implements OnInit {

  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void {
    this.userFacade.loadProfile();
  }

}
