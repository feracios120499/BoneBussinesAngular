import { Component, Input, OnInit } from '@angular/core';
import { PaymentSupDoc } from '@models/payments/payment-sup-doc.model';

@Component({
  selector: 'b1-list-documents',
  templateUrl: './b1-list-documents.component.html',
  styleUrls: ['./b1-list-documents.component.scss']
})
export class B1ListDocumentsComponent implements OnInit {
  constructor() { }

  @Input() documents?: PaymentSupDoc[];


  ngOnInit(): void {
  }
}
