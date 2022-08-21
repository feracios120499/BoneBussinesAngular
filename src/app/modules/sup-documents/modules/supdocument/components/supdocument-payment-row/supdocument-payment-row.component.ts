import { Component, Input, OnInit } from '@angular/core';
import { SupDocumentPayment } from '../../types/supdocument-payments.model';

@Component({
  selector: 'app-supdocument-payment-row',
  templateUrl: './supdocument-payment-row.component.html',
  styleUrls: ['./supdocument-payment-row.component.scss'],
})
export class SupdocumentPaymentRowComponent implements OnInit {
  @Input() payment!: SupDocumentPayment;
  constructor() {}

  ngOnInit(): void {}
}
