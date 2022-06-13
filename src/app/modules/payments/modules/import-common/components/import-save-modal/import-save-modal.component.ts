import { Component, Input, OnInit } from '@angular/core';
import { CurrencySum } from '@models/item-sum.model';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-import-save-modal',
  templateUrl: './import-save-modal.component.html',
  styleUrls: ['./import-save-modal.component.scss'],
})
export class ImportSaveModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  @Input() rows!: ImportResponsRow[];
  @Input() onSave!: (rows: ImportResponsRow[]) => void;

  successfull: ImportResponsRow[] = [];
  dublicates: ImportResponsRow[] = [];
  payments: ImportResponsRow[] = [];

  saveSuccessfull = false;
  saveDublicates = false;
  sum: CurrencySum = {};
  importType: 'common' | 'swift' = 'common';
  isAgree = false;

  ngOnInit(): void {
    this.successfull = this.rows.filter((p) => p.status == 'OK');
    this.dublicates = this.rows.filter((p) => p.status == 'EXISTS');

    this.importType = 'benificiary' in this.rows[0].model ? 'swift' : 'common';

    this.isAgree = this.importType == 'common';
  }

  changeSave(): void {
    this.payments = [];

    if (this.saveSuccessfull) {
      this.payments = this.payments.concat(this.successfull);
    }

    if (this.saveDublicates) {
      this.payments = this.payments.concat(this.dublicates);
    }

    this.sum = this.getSum(this.payments);
  }

  savePayments(): void {
    this.onSave(this.payments);
    this.modal.close();
  }

  private getSum(payments: ImportResponsRow[]): CurrencySum {
    return payments.reduce((result: CurrencySum, value) => {
      const currencyCode =
        (value.model as any).sender?.accCurrencyCode || (value.model as any).senderAccount?.accCurrencyCode;
      if (!result[currencyCode]) {
        result[currencyCode] = 0;
      }
      result[currencyCode] += value.model.amount;
      return result;
    }, {});
  }
}
