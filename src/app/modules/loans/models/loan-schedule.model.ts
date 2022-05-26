export interface LoanSchedule {
  isActual: boolean;
  date: Date;
  payment: number;
  paymentBody: number;
  paymentPercent: number;
  rest: number;
  commission: number;
}
