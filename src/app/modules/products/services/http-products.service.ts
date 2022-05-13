import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { BaseProductsService } from './base-products.service';
import { Product } from '../models/product.model';
import { ProductOrderForm } from '../models/product-order-form.model';

@Injectable({
  providedIn: 'root',
})
export class HttpProductsService extends BaseService implements BaseProductsService {
  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/v1/prm/products');
  }

  createProductOrder(clientId: string, orderData: ProductOrderForm): Observable<void> {
    return this.http.post<void>(`api/v1/prm/orders/${clientId}`, orderData);
  }
}
