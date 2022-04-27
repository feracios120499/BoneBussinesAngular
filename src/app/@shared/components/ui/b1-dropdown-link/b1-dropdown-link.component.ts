import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'b1-dropdown-link',
  templateUrl: './b1-dropdown-link.component.html',
  styleUrls: ['./b1-dropdown-link.component.scss'],
})
export class B1DropdownLinkComponent implements OnInit {
  constructor() {}

  @Input() icon!: string;
  @Input() label!: string;
  @Input() danger = false;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {}

  click(): void {
    this.btnClick.emit();
  }
}
