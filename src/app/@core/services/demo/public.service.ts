import { BankModel } from '@models/bank.model';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { PublicService } from '@services/abstract/public.service';
import { Observable } from 'rxjs';

export class DemoPublicService implements PublicService {

    getBank(bankCode: string): Observable<BankModel> {
        throw new Error('Method not implemented.');
    }

    getBanks(): Observable<BankModel[]> {
        throw new Error('Method not implemented.');
    }

    getResources(): Observable<Resources> {
        throw new Error('Method not implemented.');
    }

    getPayTypes(): Observable<PaymentType[]> {
        throw new Error('Method not implemented.');
    }

}

