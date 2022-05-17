import { Customer } from '@models/profile.model';

export interface CustomersModalResult extends Pick<Customer, 'clientId'> {}
