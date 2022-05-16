import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductOrderForm } from '../models/product-order-form.model';

export abstract class BaseProductsService {
  abstract getProducts(): Observable<Product[]>;

  abstract createProductOrder(clientId: string, orderData: ProductOrderForm): Observable<void>;
}
