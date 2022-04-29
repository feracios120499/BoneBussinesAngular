import { DateRange } from '@models/date-range.model';
import { FileModel } from '@models/file.model';
import { StatementModalResult } from '@models/statement-modal-result.model';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { AccountModel } from '@modules/accounts/models/account.model';
import { DonwloadExportModel } from '../models/download-export.model';
import { DownloadRequisitesModel } from '../models/download-requisites.model';
import { SendExportModel } from '../models/send-export.model';
import { SendRequisitesModel } from '../models/send-requisites.model';

export namespace AcctActions {
  // loadAccounts action
  export const loadAccounts = createAction('[ACCT] load accounts', props<{ reload: boolean }>());

  // setAccounts action
  export const setAccounts = createAction('[ACCT] set accounts', props<{ accounts: AccountModel[] }>());

  // setTab action
  export const setTab = createAction('[ACCT] set tab', props<{ tab: AccountTab }>());

  export const goToDetail = createAction('[ACCT] go to detail', props<{ account: AccountModel }>());

  export const openRequisitesModal = createAction('[ACCT] open requestis modal', props<{ account: AccountModel }>());

  export const openExportModal = createAction(
    '[ACCT] open export modal',
    props<{ account: AccountModel; range?: DateRange }>()
  );

  export const [downloadRequisitesRequest, downloadRequisitesSuccess, downloadRequisitesFailure] = createHTTPActions<
    DownloadRequisitesModel,
    FileModel,
    string
  >('[ACCT] download requisites');

  export const [sendRequisitesRequest, sendRequisitesSuccess, sendRequisitesFailure] = createHTTPActions<
    SendRequisitesModel,
    never | any,
    string
  >('[ACCT] send requisites');

  export const [downloadExportTurnoversRequest, downloadExportTurnoversSuccess, downloadExportTurnoversFailure] =
    createHTTPActions<DonwloadExportModel, FileModel, string>('[ACCT] download export turnovers');

  export const [sendExportTurnoversRequest, sendExportTurnoversSuccess, sendExportTurnoversFailure] = createHTTPActions<
    SendExportModel,
    never | any,
    string
  >('[ACCT] send export turnovers');

  export const [downloadStatementRequest, downloadStatementSuccess, downloadStatementFailure] = createHTTPActions<
    { result: StatementModalResult; accountId: number; bankId: string },
    FileModel,
    string
  >('[ACCT] download statement');

  export const [sendStatementRequest, sendStatementSuccess, sendStatementFailure] = createHTTPActions<
    { result: StatementModalResult; accountId: number; bankId: string },
    any | undefined,
    string
  >('[ACCT] send statement');
}
