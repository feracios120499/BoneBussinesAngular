import { ImportResponse } from '@modules/payments/models/import-response.model';
import { ImportStatus } from '@modules/payments/models/import-status.type';

export const PAY_IMPORT_COMMON_KEY = 'pay_import_common';

export interface PayImportCommonState {
  isLoading: boolean;
  status: ImportStatus;
  importResponse?: ImportResponse;
}

export const payImportCommonInitialState: PayImportCommonState = {
  isLoading: false,
  status: 'SUCCESS',
};
