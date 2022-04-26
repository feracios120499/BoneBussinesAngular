import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, scheduled } from 'rxjs';

@Component({
  selector: 'b1-card-loader',
  templateUrl: './b1-card-loader.component.html',
  styleUrls: ['./b1-card-loader.component.scss']
})
export class B1CardLoaderComponent implements OnInit {

  @Input() isLoading: Observable<boolean> = of();

  constructor() { }

  ngOnInit(): void {
  }

}
