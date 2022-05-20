import { CustomersModalResult } from './customers-modal-result.model';

export interface CustomersModalConfig {
  callback: (data: CustomersModalResult) => void;
}
