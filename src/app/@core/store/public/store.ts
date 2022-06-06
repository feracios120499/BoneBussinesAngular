import { BankModel } from '@models/bank.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { PublicLoading } from './models/public-loading.type';

export const PUBLIC_KEY = 'public';

export interface PublicState {
  banks: BankModel[];
  resources?: Resources;
  payTypes: PaymentType[];
  mobileAppLinks?: MobileAppLinks;
  loadings: PublicLoading[];
}

export const initialState: PublicState = {
  banks: [],
  payTypes: [],
  loadings: [],
};
