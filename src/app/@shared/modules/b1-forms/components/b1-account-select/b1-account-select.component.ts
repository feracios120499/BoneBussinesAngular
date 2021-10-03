import { Component, forwardRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AccountModel } from '@models/account.model';
import { SelectAccount } from '@models/select-account.model';
import { SelectAccountsList } from '@models/select-accounts-list.model';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '@services/modal.service';

import { combineLatest, concat, merge, Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'b1-account-select',
  templateUrl: './b1-account-select.component.html',
  styleUrls: ['./b1-account-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => B1AccountSelectComponent),
    multi: true
  }]
})
export class B1AccountSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {

  constructor(private modalService: ModalService) { }

  @Input('selectAccounts') selectAccounts$!: Observable<SelectAccountsList>;
  @Input() class = '';
  @Input() label = 'components.pay.accountFrom';
  @ViewChild('templateref') public templateref!: TemplateRef<any>;

  private selectValue?: SelectAccount;
  private modal?: NgbModalRef;
  private selectValueChange: Subject<SelectAccount> = new Subject<SelectAccount>();

  private changeSubcription?: Subscription;
  currentAccount?: AccountModel;
  array = Array.from(Array(5).keys());

  private onChange = (value: SelectAccount | undefined) => { };
  private onTouched = () => { };


  private setAccount(account?: AccountModel): void {
    this.currentAccount = account;
    const selectAccount: SelectAccount | undefined = account ? {
      id: account.Id,
      number: account.Number,
      name: account.Name,
      currencyCode: account.CurrencyCode,
      currencyId: account.CurrencyId,
      taxCode: account.TaxCode
    } : undefined;
    this.selectValue = selectAccount;
    this.onChange(selectAccount);
  }

  writeValue(obj: SelectAccount | undefined): void {
    this.selectValue = obj;
    this.selectValueChange.next(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  changeAccount(): void {
    this.setAccount(this.currentAccount);
  }

  ngOnInit(): void {
    const change$ = combineLatest([this.selectAccounts$, this.selectValueChange]);
    this.changeSubcription = change$.pipe(filter(([select, value]) => !!select && !!value)).subscribe(([select, value]) => {
      const accounts = select.accounts;
      let account: AccountModel | undefined;
      if (value.id) {
        account = accounts.find(p => p.Id === value.id);
      }
      else {
        account = accounts.find(
          p => p.Number === value.number &&
            (p.CurrencyCode === value.currencyCode || p.CurrencyId === value.currencyId)
        );
      }
      if (account) {
        this.setAccount(account);
      }
      else if (accounts.length > 0) {
        this.setAccount(accounts[0]);
      }
    });
  }

  ngOnDestroy(): void {
    this.changeSubcription?.unsubscribe();
  }

  openModal(): void {
    console.log(this.templateref);
    this.modal = this.modalService.open(this.templateref);
  }

  selectAccount(account: AccountModel): void {
    this.setAccount(account);
    this.modal?.close();
  }

}
