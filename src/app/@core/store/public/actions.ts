import { MobileAppLinks } from '@models/mobile-app-links.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { createAction } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { BankModel } from 'src/app/@shared/models/bank.model';
import { Feedback } from '@models/feedback.model';

export namespace PublicActions {
  export const [loadBanksRequest, loadBanksSuccess, loadBanksFailure] = createHTTPActions<void, BankModel[], string>(
    '[PUBLIC] load banks'
  );

  export const [loadBankRequest, loadBankSuccess, loadBankFailure] = createHTTPActions<string, BankModel, string>(
    '[PUBLIC] load bank'
  );

  export const [loadResourcesRequest, loadResourcesSuccess, loadResourcesFailure] = createHTTPActions<
    void,
    Resources,
    string
  >('[PUBLIC] load resource');

  export const [loadPayTypesReuqest, loadPayTypesSuccess, loadPayTypesFailure] = createHTTPActions<
    void,
    PaymentType[],
    string
  >('[PUBLIC] load pay types');

  export const [loadMobileAppLinksReuqest, loadMobileAppLinksSuccess, loadMobileAppLinksFailure] = createHTTPActions<
    void,
    MobileAppLinks,
    string
  >('[PUBLIC] load mobile app links');

  export const showFeedbackForm = createAction('[PUBLIC] show feedback form');

  export const [sendFeedbackRequest, sendFeedbackSuccess, sendFeedbackFailure] = createHTTPActions<
    Feedback,
    void,
    string
  >('[PUBLIC] send feedback');
}
