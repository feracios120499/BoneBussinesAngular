import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'auth-error',
  templateUrl: './auth-error.component.html',
  styleUrls: ['./auth-error.component.scss']
})
export class AuthErrorComponent implements OnInit {

  @Input() message: string | null | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
