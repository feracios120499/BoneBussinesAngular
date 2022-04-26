import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'b1-page-button',
  templateUrl: './b1-page-button.component.html',
  styleUrls: ['./b1-page-button.component.scss'],
})
export class B1PageButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() icon!: string;
  @Input() label!: string;
  @Input() primary = false;

  @Output() b1Click = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  click(): void {
    this.b1Click?.emit();
  }
}
