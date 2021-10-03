import { BankModel } from '@models/bank.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { Observable } from 'rxjs';

export abstract class PublicService {

    abstract getBank(bankCode: string): Observable<BankModel>;

    abstract getBanks(): Observable<BankModel[]>;

    abstract getResources(): Observable<Resources>;

    abstract getPayTypes(): Observable<PaymentType[]>;
}
