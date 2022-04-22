import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LimitType } from '@b1-types/limit-type.type';
import { CardAccount } from '@models/cards/card-account.model';
import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { FileModel } from '@models/file.model';
import { BaseService } from '@services/base.service';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardsService extends BaseService {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  getCardAccounts(clientId: string): Observable<CardAccount[]> {
    return this.http.get<CardAccount[]>(`api/v1/acct/corpcards/${clientId}`);
  }

  getCardDetails(
    cardId: string,
    accountId: number,
    clientId: string
  ): Observable<CardDetails> {
    return this.http.get<CardDetails>(
      `api/v1/acct/corpcards/${cardId}/${clientId}/${accountId}`
    );
  }

  getCardLimits(cardId: string, clientId: string): Observable<CardLimit[]> {
    return this.http.get<CardLimit[]>(
      `api/v1/acct/corpcards/limits/${cardId}/${clientId}`
    );
  }

  getCardSmsStatus(
    cardId: string,
    clientId: string
  ): Observable<CardSmsStatus> {
    return this.http.get<CardSmsStatus>(
      `api/v1/acct/corpcards/smsinfo/${cardId}/${clientId}`
    );
  }

  setDefaultLimit(
    cardId: string,
    limitType: LimitType,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/limits/default/${cardId}/${limitType}/${clientId}`,
      {}
    );
  }

  updateLimit(
    cardId: string,
    limit: CardLimit,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/limits/${cardId}/${limit.type}/${clientId}`,
      limit
    );
  }

  updateSmsStatus(
    cardId: string,
    phoneNumber: string,
    isEnabled: boolean,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/smsService/${cardId}/${clientId}`,
      { phoneNumber, isEnabled }
    );
  }

  lockCard(
    cardId: string,
    message: string | undefined,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/lock/${cardId}/${clientId}`,
      {
        message,
      }
    );
  }

  unlockCard(cardId: string, clientId: string): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/unlock/${cardId}/${clientId}`,
      {}
    );
  }

  getStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF'
  ): Observable<FileModel> {
    const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
    const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
    return this.http
      .get<Blob>(
        `api/v1/acct/corpcards/statement/${format}/${cardId}/${clientId}?${startParam}&${endParam}`,
        { responseType: 'blob' as 'json', observe: 'response' }
      )
      .pipe(
        map((response) => this.mapFile(response)),
        map((result) => ({
          ...result,
          name: result.name || `statement.${format.toLowerCase()}`,
        }))
      );
  }

  sendStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    email: string
  ): Observable<never> {
    const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
    const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
    const emailParam = `&email=${email}`;

    return this.http.get<never>(
      `api/v1/acct/corpcards/sendFile/${format}/${cardId}/${clientId}?${startParam}&${endParam}${emailParam}`
    );
  }

  private mapFile(res: HttpResponse<Blob>): FileModel {
    const file: FileModel = {
      blob: res.body ? res.body : undefined,
    };

    const disposition = res.headers.get('Content-Disposition');
    if (!disposition) {
      // either the disposition was not sent, or is not accessible
      //  (see CORS Access-Control-Expose-Headers)
      return file;
    }
    const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; |$)/;
    const asciiFilenameRegex = /filename=(["'])(.*?[^\\])\1(?:; |$)/;

    let fileName = '';
    if (utf8FilenameRegex.test(disposition)) {
      const exec = utf8FilenameRegex.exec(disposition);
      if (exec) {
        fileName = decodeURIComponent(exec[1]);
      } else {
        return file;
      }
    } else {
      const matches = asciiFilenameRegex.exec(disposition);
      if (matches != null && matches[2]) {
        fileName = matches[2];
      }
    }
    file.name = fileName;
    return file;
  }
}
