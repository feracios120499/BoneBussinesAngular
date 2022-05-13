import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseProductsService } from './base-products.service';
import { Product } from '../models/product.model';
import { ProductOrderForm } from '../models/product-order-form.model';

@Injectable({
  providedIn: 'root',
})
export class DemoProductsService extends BaseProductsService {
  getProducts(): Observable<Product[]> {
    throw new Error('Method is not implemented');
  }

  createProductOrder(clientId: string, orderData: ProductOrderForm): Observable<void> {
    throw new Error('Method is not implemented');
  }
}
