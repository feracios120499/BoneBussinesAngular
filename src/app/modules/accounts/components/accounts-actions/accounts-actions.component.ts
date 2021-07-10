import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-accounts-actions',
  templateUrl: './accounts-actions.component.html',
  styleUrls: ['./accounts-actions.component.scss']
})
export class AccountsActionsComponent implements OnInit {
  filterForm: FormGroup;
  test: Observable<any> = of({ filter: '123' });
  constructor() {
    this.filterForm = new FormGroup({
      filter: new FormControl(null),
    });
  }

  ngOnInit(): void {

  }

  filterChange(filter: any): void {
    console.log(filter);
  }

}
