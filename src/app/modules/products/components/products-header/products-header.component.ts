import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
