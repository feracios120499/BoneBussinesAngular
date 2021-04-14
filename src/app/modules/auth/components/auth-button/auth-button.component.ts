import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  constructor() { }

  @Output() authClick = new EventEmitter();
  @Input() isLoading: boolean | null = false;
  @Input() disabled: boolean | null = false;
  @Input() label = '';

  onClick(): void {
    this.authClick.emit();
  }
  ngOnInit(): void {
  }

}
