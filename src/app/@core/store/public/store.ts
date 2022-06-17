import { BankModel } from '@models/bank.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { News } from '@models/news.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { Version } from '@models/version.model';
import { PublicLoading } from './models/public-loading.type';

export const PUBLIC_KEY = 'public';

export interface PublicState {
  banks: BankModel[];
  resources?: Resources;
  payTypes: PaymentType[];
  mobileAppLinks?: MobileAppLinks;
  watchVersion?: Version;
  newsList: News[];
  loadings: PublicLoading[];
}

export const initialState: PublicState = {
  banks: [],
  payTypes: [],
  newsList: [],
  loadings: [],
};
