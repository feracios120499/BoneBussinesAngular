import { BankModel } from '@models/bank.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';

export const PUBLIC_KEY = 'public';

export interface PublicState {
  banks: BankModel[];
  resources?: Resources;
  payTypes: PaymentType[];
  mobileAppLinks?: MobileAppLinks;
}

export const initialState: PublicState = {
  banks: [],
  payTypes: [],
};
