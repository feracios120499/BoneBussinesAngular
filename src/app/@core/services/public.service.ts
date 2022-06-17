import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '@models/feedback.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { News } from '@models/news.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { Version } from '@models/version.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BankModel } from 'src/app/@shared/models/bank.model';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PublicService extends BaseService {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  getBank(bankCode: string): Observable<BankModel> {
    return this.http
      .get<any>(`api/v1/public/banks/${bankCode}`)
      .pipe(map((response) => (response.Result ? response.Result : response)));
  }

  getBanks(): Observable<BankModel[]> {
    return this.http
      .get<any>(`api/v1/public/banks/`)
      .pipe(map((response) => (response.Result ? response.Result : response)));
  }

  getResources(): Observable<Resources> {
    return this.http
      .get<any>('api/v1/public/resources')
      .pipe(map((response) => (response.Result ? response.Result : response)));
  }

  getPayTypes(): Observable<PaymentType[]> {
    return this.http
      .get<any>(`api/v1/pay/paymentTypeCodes`)
      .pipe(map((response) => (response.Result ? (response.Result as PaymentType[]) : (response as PaymentType[]))));
  }

  getMobileAppLinks(): Observable<MobileAppLinks> {
    return this.http.get<any>('api/v1/public/mobile').pipe(
      map((response) => (response.Result ? response.Result : response)),
      map(this.mapMobileAppLinksResponse)
    );
  }

  sendFeedback(feedback: Feedback): Observable<void> {
    return this.http.post<void>('api/v1/public/feedback', feedback);
  }

  getVersion(code: string): Observable<Version> {
    return this.http.get<Version>(`api/v1/public/versions/${code}/core`);
  }

  getNewsList(): Observable<News[]> {
    return this.http.get<News[]>('api/v1/prm/news/lastfive');
  }

  private mapMobileAppLinksResponse(response: {
    googlePlayAndroid: string;
    appStoreIphoneLink: string;
    [key: string]: string;
  }): MobileAppLinks {
    const { googlePlayAndroid, appStoreIphoneLink } = response;
    return { googlePlayAndroid, appStoreIphone: appStoreIphoneLink };
  }
}
