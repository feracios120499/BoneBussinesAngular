import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-my-accounts',
  templateUrl: './create-my-accounts.component.html',
  styleUrls: ['./create-my-accounts.component.scss']
})
export class CreateMyAccountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

}
