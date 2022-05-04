import { Injectable } from '@angular/core';
import { FileModel } from '@models/file.model';
import { AccountModel } from '@modules/accounts/models/account.model';
import { AcctEdit } from '@modules/accounts/models/acct-edit.model';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { TurnoverTransaction } from '@modules/accounts/models/turnover-transaction.model';
import { Turnovers } from '@modules/accounts/models/turnovers.model';
import { Dayjs } from 'dayjs';
import { Observable, of } from 'rxjs';
import { BaseAcctService } from './base-acct.service';

@Injectable({
  providedIn: 'root',
})
export class DemoAcctService extends BaseAcctService {
  private accounts1: AccountModel[] = [
    {
      id: 131696.0,
      customerId: 100100.0,
      type: 'CURRENT',
      number: 'UA233004650000026002301907973',
      iban: 'UA233004650000026002301907973',
      name: 'Основний рахунок (980)',
      bankId: '300465',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 23160885.0,
      plannedBalance: 12303150.0,
      lastActive: new Date('2017-04-04T00:00:00'),
      openingDate: new Date('2009-03-10T00:00:00'),
      closingDate: undefined,
      debitTurns: 120000.0,
      creditTurns: 0.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: true,
      isApplicationPayingAccount: false,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Active,
    },
    {
      id: 2013649.0,
      customerId: 100100.0,
      type: 'CURRENT',
      number: '26002301921',
      iban: 'UA943004650000000026002301921',
      name: 'Депозитний рахунок (980)',
      bankId: '300465',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 8103849.0,
      plannedBalance: 8121595.0,
      lastActive: new Date('2016-01-05T00:00:00'),
      openingDate: new Date('2013-02-18T00:00:00'),
      closingDate: undefined,
      debitTurns: 1951516.0,
      creditTurns: 10007770.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: false,
      isApplicationPayingAccount: false,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Active,
    },
    {
      id: 131210.0,
      customerId: 100100.0,
      type: 'CURRENT',
      number: 'UA783004650000000026006307921',
      iban: 'UA783004650000000026006307921',
      name: 'Резервний рахунок (980)',
      bankId: '300465',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 3272500000.0,
      plannedBalance: 3272500000.0,
      lastActive: new Date('2013-02-28T00:00:00'),
      openingDate: new Date('2008-03-04T00:00:00'),
      closingDate: undefined,
      debitTurns: 800.0,
      creditTurns: 0.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: true,
      isApplicationPayingAccount: true,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Active,
    },
    {
      id: 131215.0,
      customerId: 100100.0,
      type: 'CURRENT',
      number: 'UA783004650000000026006307921',
      iban: 'UA783004650000000026006307921',
      name: 'Резервний рахунок (980)',
      bankId: '300465',
      currencyId: 840,
      currencyCode: 'USD',
      balance: 3272500000.0,
      plannedBalance: 3272500000.0,
      lastActive: new Date('2013-02-28T00:00:00'),
      openingDate: new Date('2008-03-04T00:00:00'),
      closingDate: undefined,
      debitTurns: 800.0,
      creditTurns: 0.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: true,
      isApplicationPayingAccount: true,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Active,
    },
    {
      id: 131200.0,
      customerId: 100100.0,
      type: 'CURRENT',
      number: 'UA083004650000026000297908516',
      iban: 'UA083004650000026000297908516',
      name: 'Технічний рахунок(980)',
      bankId: '300465',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 253530.0,
      plannedBalance: 253030.0,
      lastActive: new Date('2014-02-18T00:00:00'),
      openingDate: new Date('2008-02-26T00:00:00'),
      closingDate: undefined,
      debitTurns: 103000.0,
      creditTurns: 1030.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: false,
      isApplicationPayingAccount: false,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Closed,
    },
    {
      id: 130691.0,
      customerId: 100100.0,
      type: 'CURRENT',
      number: 'UA513004650000026005160907973',
      iban: 'UA513004650000026005160907973',
      name: 'Зарплатний рахунок (980)',
      bankId: '300465',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 7707542.0,
      plannedBalance: 7707542.0,
      lastActive: new Date('2013-04-30T00:00:00'),
      openingDate: new Date('2002-11-15T00:00:00'),
      closingDate: undefined,
      debitTurns: 5218222.0,
      creditTurns: 2163615.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: true,
      isApplicationPayingAccount: false,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Active,
    },
  ];
  private accounts2: AccountModel[] = [
    {
      id: 2013650.0,
      customerId: 100200.0,
      type: 'CURRENT',
      number: 'UA233004650000026002301907973',
      iban: 'UA233004650000026002301907973',
      name: 'Для розрахунків в межах Галактичної Імперії',
      bankId: '300465',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 800103849.0,
      plannedBalance: 800121595.0,
      lastActive: new Date('2013-04-30T00:00:00'),
      openingDate: new Date('2002-11-15T00:00:00'),
      closingDate: undefined,
      debitTurns: 5218222.0,
      creditTurns: 2163615.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: true,
      isApplicationPayingAccount: false,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Active,
    },
    {
      id: 2013651.0,
      customerId: 100200.0,
      type: 'CURRENT',
      number: '260012340012',
      iban: '',
      name: 'Для зовнішніх розрахунків',
      bankId: '302076',
      currencyId: 980,
      currencyCode: 'UAH',
      balance: 5623160885.0,
      plannedBalance: 5612303150.0,
      lastActive: new Date('2014-02-18T00:00:00'),
      openingDate: new Date('2008-02-26T00:00:00'),
      closingDate: undefined,
      debitTurns: 103000.0,
      creditTurns: 1030.0,
      lockDebitCode: 0,
      lockCreditCode: 0,
      limit: 0.0,
      taxCode: '3456789012',
      isTechnical: false,
      isOverdraft: false,
      isCardAccount: false,
      statementTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'DBF', 'HTML'],
      isStatementFree: true,
      requisitesTypesList: ['PDF', 'XLSX', 'RTF', 'TXT', 'HTML'],
      exportTypesList: ['DBF'],
      isPaymentPayingAccount: false,
      isApplicationPayingAccount: false,
      ob22: '03',
      tip: 'ODB',
      branch: '/300465/000000/060000/',
      status: AccountTab.Closed,
    },
  ];

  private accounts: { [id: string]: AccountModel[] } = {
    '565bbaee-37a6-48ff-b3e8-f4822c23c5c1': this.accounts2,
    '565bbaee-37a6-48ff-b3e8-f4822c23c5c2': this.accounts1,
  };

  getAccounts(clientId: string): Observable<AccountModel[]> {
    return of(this.accounts[clientId]);
  }
  getAccount(bankId: string, accountId: number, clientId: string): Observable<AccountModel> {
    return of(this.accounts[clientId].find((p) => p.id === accountId) as AccountModel);
  }
  updateAccount(bankId: string, accountId: number, clientId: string, updateAccount: AcctEdit): Observable<never> {
    throw new Error('Method not implemented.');
  }
  getTurnovers(bankId: string, accountId: number, clientId: string, start: Dayjs, end: Dayjs): Observable<Turnovers[]> {
    throw new Error('Method not implemented.');
  }

  getIncomingTransactions(clientId: string, start: Dayjs, end: Dayjs): Observable<Transaction[]> {
    throw new Error('Method not implemented.');
  }

  getTransactions(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs
  ): Observable<TurnoverTransaction[]> {
    throw new Error('Method not implemented.');
  }
  getTransaction(bankId: string, transactionId: number, clientId: string): Observable<Transaction> {
    throw new Error('Method not implemented.');
  }
  getStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    throw new Error('Method not implemented.');
  }
  sendStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    throw new Error('Method not implemented.');
  }
  getRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    throw new Error('Method not implemented.');
  }
  sendRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    throw new Error('Method not implemented.');
  }
  getPrintTransaction(bankId: string, transactionId: string, clientId: string, format: string): Observable<string> {
    throw new Error('Method not implemented.');
  }
  getExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    throw new Error('Method not implemented.');
  }
  sendExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    throw new Error('Method not implemented.');
  }
}
