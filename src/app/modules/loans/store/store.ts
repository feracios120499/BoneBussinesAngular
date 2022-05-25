import { LoanSchedule } from '../models/loan-schedule.model';
import { Loan } from '../models/loan.model';
import { LoansLoading } from '../models/loans-loading.type';

export const LOANS_KEY = 'loans';

export interface LoansState {
  loans: Loan[];
  currentLoan?: Loan;
  loanSchedules: LoanSchedule[];
  filterTerm: string;
  loadings: LoansLoading[];
}

export const initialState: LoansState = {
  loans: [],
  loanSchedules: [],
  filterTerm: '',
  loadings: [],
};
