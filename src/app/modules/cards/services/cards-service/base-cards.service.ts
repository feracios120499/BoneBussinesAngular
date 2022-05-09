import { LimitType } from '@b1-types/limit-type.type';
import { CardAccount } from '@models/cards/card-account.model';
import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { FileModel } from '@models/file.model';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';

export abstract class BaseCardsService {
  abstract getCardAccounts(clientId: string): Observable<CardAccount[]>;

  abstract getCardDetails(cardId: string, accountId: number, clientId: string): Observable<CardDetails>;

  abstract getCardLimits(cardId: string, clientId: string): Observable<CardLimit[]>;

  abstract getCardSmsStatus(cardId: string, clientId: string): Observable<CardSmsStatus>;

  abstract setDefaultLimit(cardId: string, limitType: LimitType, clientId: string): Observable<void>;

  abstract updateLimit(cardId: string, limit: CardLimit, clientId: string): Observable<void>;

  abstract updateSmsStatus(cardId: string, phoneNumber: string, isEnabled: boolean, clientId: string): Observable<void>;

  abstract lockCard(cardId: string, message: string | undefined, clientId: string): Observable<void>;

  abstract unlockCard(cardId: string, clientId: string): Observable<void>;

  abstract getStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string
  ): Observable<FileModel>;

  abstract sendStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string
  ): Observable<never>;
}
