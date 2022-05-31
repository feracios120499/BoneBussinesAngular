import { Component, Input, OnInit } from '@angular/core';
import { ImportError } from '@modules/payments/models/import-response.model';

@Component({
  selector: 'b1-import-error',
  templateUrl: './b1-import-error.component.html',
  styleUrls: ['./b1-import-error.component.scss'],
})
export class B1ImportErrorComponent implements OnInit {
  constructor() {}
  @Input() errors?: ImportError;
  @Input() field!: string;
  ngOnInit(): void {}
}
