import { Component, Input, OnInit } from '@angular/core';
import { PaymentSupDoc } from '@models/payments/payment-sup-doc.model';

@Component({
  selector: 'b1-list-documents',
  templateUrl: './b1-list-documents.component.html',
  styleUrls: ['./b1-list-documents.component.scss'],
})
export class B1ListDocumentsComponent implements OnInit {
  constructor() {}

  @Input() documents?: PaymentSupDoc[];

  currentDocument?: PaymentSupDoc;
  showDocument?: boolean;

  onSupdocumentSelect(doc: PaymentSupDoc): void {
    if (this.currentDocument == doc) {
      this.showDocument = false;

      this.currentDocument = undefined;
      return;
    }
    this.currentDocument = doc;
    this.showDocument = true;
    console.log(this.currentDocument.supDoc.fileName);
  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'kB', 'MB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  ngOnInit(): void {
    this.showDocument = false;
  }
}
