import { TurnoverTransaction } from './turnover-transaction.model';

export interface Turnovers {
    Id: string;
    AccId: number;
    BankId: string;
    TransactionsCount: number;
    TurnoverDate: Date;
    Debit: number;
    DebitEquivalent: number;
    Credit: number;
    CreditEquivalent: number;
    BalanceIn: number;
    BalanceInEquivalent: number;
    BalanceOut: number;
    BalanceOutEquivalent: number;
    Transactions?: TurnoverTransaction[];
}

export interface UiTurnovers extends Turnovers {
    isOpen: boolean;
    isLoading: boolean;
}
