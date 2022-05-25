import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Loan } from '../models/loan.model';
import { LoanSchedule } from '../models/loan-schedule.model';
import { LOANS_KEY } from './store';

export namespace LoansActions {
  export const init = createAction(`[${LOANS_KEY}] init`);

  export const destroy = createAction(`[${LOANS_KEY}] destroy`);

  export const [loadLoansRequest, loadLoansSuccess, loadLoansFailure] = createHTTPActions<void, Loan[], string>(
    `[${LOANS_KEY}] load loans`
  );

  export const filterLoans = createAction(`[${LOANS_KEY}] filter loans`, props<{ term: string }>());

  export const resetLoanFilter = createAction(`[${LOANS_KEY}] reset loan filter`);

  export const setCurrentLoan = createAction(`${LOANS_KEY} set current loan`, props<{ loan: Loan }>());

  export const goToSchedule = createAction(
    `[${LOANS_KEY}] go to loan schedule`,
    props<{ bankId: string; loanId: number }>()
  );

  export const [loadLoanSchedulesRequest, loadLoanSchedulesSuccess, loadLoanSchedulesFailure] = createHTTPActions<
    void,
    LoanSchedule[],
    string
  >(`[${LOANS_KEY}] load loan schedules`);

  export const makeLoanPayment = createAction(`[${LOANS_KEY}] make loan payment`, props<{ loan: Loan }>());
}
