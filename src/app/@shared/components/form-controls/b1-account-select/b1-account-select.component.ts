import { Component, forwardRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AccountModel } from '@modules/accounts/models/account.model';
import { SelectAccount } from '@models/select-account.model';
import { SelectAccountsList } from '@models/select-accounts-list.model';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '@services/modal.service';
import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'b1-account-select',
  templateUrl: './b1-account-select.component.html',
  styleUrls: ['./b1-account-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B1AccountSelectComponent),
      multi: true,
    },
  ],
})
export class B1AccountSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
  constructor(private modalService: ModalService) {}

  @Input('selectAccounts') selectAccounts$!: Observable<SelectAccountsList>;
  @Input() class = '';
  @Input() label = 'components.pay.accountFrom';
  @Input() labelNotFound = 'components.acct.noActiveAccount';
  @ViewChild('templateref') public templateref!: TemplateRef<any>;

  selectValue?: SelectAccount;
  private modal?: NgbModalRef;
  private selectValueChange: Subject<SelectAccount> = new Subject<SelectAccount>();

  private changeSubcription?: Subscription;
  currentAccount?: AccountModel;
  array = Array.from(Array(5).keys());

  private onChange = (value: SelectAccount | undefined) => {};
  private onTouched = () => {};

  private setAccount(account?: AccountModel): void {
    setTimeout(() => {
      this.currentAccount = account;
      const selectAccount: SelectAccount | undefined = account
        ? {
            id: account.id,
            number: account.number,
            name: account.name,
            currencyCode: account.currencyCode,
            currencyId: account.currencyId,
            taxCode: account.taxCode,
            balance: account.balance,
          }
        : undefined;
      this.selectValue = selectAccount;
      this.onChange(selectAccount);
    });
  }

  writeValue(obj: SelectAccount | undefined): void {
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
    console.log('account-select init');
    this.selectAccounts$.subscribe((value) => console.log('account-select', value));
    this.changeSubcription = change$.pipe(filter(([select, value]) => !!select)).subscribe(([select, value]) => {
      const accounts = select.accounts;

      value = value || this.selectValue;
      if (!value) {
        this.setAccount(accounts[0]);
        return;
      }
      let account: AccountModel | undefined;
      if (value.id) {
        account = accounts.find((p) => p.id === value.id);
      } else {
        account = accounts.find(
          (p) =>
            p.number === value.number && (p.currencyCode === value.currencyCode || p.currencyId === value.currencyId)
        );
      }
      if (account) {
        this.setAccount(account);
      } else {
        this.setAccount(accounts[0]);
      }
    });
  }

  ngOnDestroy(): void {
    this.changeSubcription?.unsubscribe();
  }

  openModal(): void {
    this.modal = this.modalService.open(this.templateref);
  }

  selectAccount(account: AccountModel): void {
    this.setAccount(account);
    this.modal?.close();
  }
}
