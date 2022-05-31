import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b1-link',
  templateUrl: './b1-link.component.html',
  styleUrls: ['./b1-link.component.scss'],
})
export class B1LinkComponent implements OnInit {
  constructor() {}
  @Input() icon!: string;
  @Input() title!: string;
  @Input() url!: string;

  ngOnInit(): void {}
}
