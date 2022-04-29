import { TurnoverTransaction } from './turnover-transaction.model';

export interface Turnovers {
    id: string;
    accId: number;
    bankId: string;
    transactionsCount: number;
    turnoverDate: Date;
    debit: number;
    debitEquivalent: number;
    credit: number;
    creditEquivalent: number;
    balanceIn: number;
    balanceInEquivalent: number;
    balanceOut: number;
    balanceOutEquivalent: number;
    transactions?: TurnoverTransaction[];
}

export interface UiTurnovers extends Turnovers {
    isOpen: boolean;
    isLoading: boolean;
}
