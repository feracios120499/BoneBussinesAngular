import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss']
})
export class AuthorizedLayoutComponent implements OnInit {

  constructor() { }

  public test: boolean = '';
  ngOnInit(): void {
  }

}
