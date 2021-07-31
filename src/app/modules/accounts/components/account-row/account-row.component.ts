import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/@shared/models/account.model';

@Component({
  selector: 'app-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.scss']
})
export class AccountRowComponent implements OnInit {

  @Input() account!: AccountModel;
  constructor() { }

  ngOnInit(): void {
  }

  test(): void {
    console.log('test');
  }

}
