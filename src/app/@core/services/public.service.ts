import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '@models/currency.model';
import { MobileAppLinks } from '@models/mobile-app-links.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { SwiftBank } from '@models/swift-bank.model';
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

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`api/v1/public/currencies`);
  }

  getSwiftBanks(bic: string): Observable<SwiftBank[]> {
    return this.http.get<SwiftBank[]>(`api/v1/public/swbanks?$top=20&$filter=contains(BIC,'${bic}')`);
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
