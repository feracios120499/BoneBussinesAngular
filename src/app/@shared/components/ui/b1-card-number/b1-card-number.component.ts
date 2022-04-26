import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b1-card-number',
  templateUrl: './b1-card-number.component.html',
  styleUrls: ['./b1-card-number.component.scss']
})
export class B1CardNumberComponent implements OnInit {

  constructor() { }

  @Input() cardNumber!: string;
  @Input() cardNumberClass: string = '';

  ngOnInit(): void {
  }

}
