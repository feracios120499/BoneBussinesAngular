import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppSelectors } from '@store/app/selectors';
import { Product } from '../models/product.model';
import { ProductOrderForm } from '../models/product-order-form.model';
import { BaseProductsService } from './base-products.service';
import { DemoProductsService } from './demo-products.service';
import { HttpProductsService } from './http-products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements BaseProductsService {
  private productsService: BaseProductsService;

  constructor(
    demoProductsService: DemoProductsService,
    httpProductsService: HttpProductsService,
    private store: Store
  ) {
    this.productsService = httpProductsService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.productsService = demoProductsService;
      } else {
        this.productsService = httpProductsService;
      }
    });
  }

  getProducts(): Observable<Product[]> {
    return this.productsService.getProducts();
  }

  createProductOrder(clientId: string, orderData: ProductOrderForm): Observable<void> {
    return this.productsService.createProductOrder(clientId, orderData);
  }
}
