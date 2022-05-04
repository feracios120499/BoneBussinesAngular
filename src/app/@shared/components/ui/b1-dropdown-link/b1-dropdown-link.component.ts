import { Component, EventEmitter, Inject, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { B1DropdownComponent } from '@ui/b1-dropdown/b1-dropdown.component';

@Component({
  selector: 'b1-dropdown-link',
  templateUrl: './b1-dropdown-link.component.html',
  styleUrls: ['./b1-dropdown-link.component.scss'],
})
export class B1DropdownLinkComponent implements OnInit {
  constructor(@Inject(B1DropdownComponent) private dropdown: B1DropdownComponent) {}

  @Input() icon!: string;
  @Input() label!: string;
  @Input() danger = false;
  @Input() separator = false;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {}

  click(): void {
    this.dropdown.close();
    this.btnClick.emit();
  }
}
